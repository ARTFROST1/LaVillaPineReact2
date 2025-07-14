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
    const payload: IndexNowPayload = {
      host: "lavillapine.onrender.com",
      key: INDEX_NOW_KEY,
      keyLocation: `${SITE_URL}/indexnow-key.txt`,
      urlList: urls
    };

    log(`Отправка уведомления IndexNow для ${urls.length} URL`);
    
    // Отправляем уведомление в Yandex
    const yandexResponse = await fetch("https://yandex.com/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    // Отправляем уведомление в Bing
    const bingResponse = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    const yandexSuccess = yandexResponse.ok;
    const bingSuccess = bingResponse.ok;

    if (yandexSuccess || bingSuccess) {
      log(`IndexNow уведомления отправлены успешно - Yandex: ${yandexSuccess}, Bing: ${bingSuccess}`);
      return true;
    } else {
      log(`IndexNow уведомления не удалось отправить - Yandex: ${yandexResponse.status}, Bing: ${bingResponse.status}`);
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