import { log } from "./vite";

const INDEX_NOW_KEY = "lavillapine2025indexnow123456789abcdef";
const SITE_URL = "https://lavillapine.onrender.com";

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export async function notifyIndexNow(urls: string[]): Promise<boolean> {
  try {
    if (urls.length === 0) {
      log("IndexNow: Нет URL для отправки");
      return false;
    }

    log(`Отправка уведомления IndexNow для ${urls.length} URL: ${urls.join(", ")}`);
    
    let yandexSuccess = false;
    let bingSuccess = false;

    // Если один URL, используем GET-запрос для Yandex (согласно документации)
    if (urls.length === 1) {
      const singleUrl = urls[0];
      const getParams = new URLSearchParams({
        url: singleUrl,
        key: INDEX_NOW_KEY,
        keyLocation: `${SITE_URL}/indexnow-key.txt`
      });

      const yandexGetResponse = await fetch(`https://yandex.com/indexnow?${getParams.toString()}`, {
        method: "GET",
        headers: {
          "User-Agent": "La Villa Pine IndexNow Client/1.0"
        }
      });

      yandexSuccess = yandexGetResponse.ok;
      
      if (yandexGetResponse.ok) {
        log(`IndexNow GET запрос в Yandex успешно отправлен для ${singleUrl}`);
      } else {
        log(`IndexNow GET запрос в Yandex не удался: ${yandexGetResponse.status} - ${yandexGetResponse.statusText}`);
      }
    }

    // Для множественных URL или если GET не удался, используем POST
    if (urls.length > 1 || !yandexSuccess) {
      const payload: IndexNowPayload = {
        host: "lavillapine.onrender.com",
        key: INDEX_NOW_KEY,
        keyLocation: `${SITE_URL}/indexnow-key.txt`,
        urlList: urls
      };

      // Отправляем уведомление в Yandex
      const yandexResponse = await fetch("https://yandex.com/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "La Villa Pine IndexNow Client/1.0"
        },
        body: JSON.stringify(payload)
      });

      // Отправляем уведомление в Bing
      const bingResponse = await fetch("https://www.bing.com/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "La Villa Pine IndexNow Client/1.0"
        },
        body: JSON.stringify(payload)
      });

      yandexSuccess = yandexResponse.ok;
      bingSuccess = bingResponse.ok;

      if (yandexResponse.ok) {
        log(`IndexNow POST запрос в Yandex успешно отправлен`);
      } else {
        log(`IndexNow POST запрос в Yandex не удался: ${yandexResponse.status} - ${yandexResponse.statusText}`);
      }

      if (bingResponse.ok) {
        log(`IndexNow POST запрос в Bing успешно отправлен`);
      } else {
        log(`IndexNow POST запрос в Bing не удался: ${bingResponse.status} - ${bingResponse.statusText}`);
      }
    }

    if (yandexSuccess || bingSuccess) {
      log(`IndexNow уведомления отправлены успешно - Yandex: ${yandexSuccess}, Bing: ${bingSuccess}`);
      return true;
    } else {
      log(`IndexNow уведомления не удалось отправить ни в одну поисковую систему`);
      return false;
    }
  } catch (error) {
    log(`Ошибка при отправке IndexNow уведомления: ${error}`);
    return false;
  }
}

export function getAllSiteUrls(): string[] {
  return [
    `${SITE_URL}/`,
    `${SITE_URL}/about`,
    `${SITE_URL}/gallery`,
    `${SITE_URL}/contacts`,
    `${SITE_URL}/booking`
  ];
}

export function getIndexNowKey(): string {
  return INDEX_NOW_KEY;
}

// Функция для отправки одного URL через GET-запрос (рекомендуется Яндексом)
export async function notifyIndexNowSingleUrl(url: string): Promise<boolean> {
  try {
    log(`Отправка уведомления IndexNow для одного URL: ${url}`);
    
    const getParams = new URLSearchParams({
      url: url,
      key: INDEX_NOW_KEY,
      keyLocation: `${SITE_URL}/indexnow-key.txt`
    });

    const yandexGetResponse = await fetch(`https://yandex.com/indexnow?${getParams.toString()}`, {
      method: "GET",
      headers: {
        "User-Agent": "La Villa Pine IndexNow Client/1.0"
      }
    });

    if (yandexGetResponse.ok) {
      log(`IndexNow GET запрос в Yandex успешно отправлен для ${url}`);
      return true;
    } else {
      log(`IndexNow GET запрос в Yandex не удался: ${yandexGetResponse.status} - ${yandexGetResponse.statusText}`);
      return false;
    }
  } catch (error) {
    log(`Ошибка при отправке IndexNow уведомления для ${url}: ${error}`);
    return false;
  }
}

// Проверка валидности ключа
export function validateIndexNowKey(key: string): boolean {
  return key === INDEX_NOW_KEY && key.length >= 8 && key.length <= 128;
}