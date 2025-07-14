import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Send, Globe, FileText, Zap } from "lucide-react";
import PageMeta from "@/components/seo/PageMeta";
import { SEO_PAGES } from "@/lib/seo-constants";

export default function Admin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customUrls, setCustomUrls] = useState("");
  const { toast } = useToast();

  const handleNotifyAll = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/indexnow/all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Успешно!",
          description: data.message,
        });
      } else {
        toast({
          title: "Ошибка",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить уведомления",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNotifyCustom = async () => {
    if (!customUrls.trim()) {
      toast({
        title: "Ошибка",
        description: "Введите URL для уведомления",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const urls = customUrls
        .split("\n")
        .map(url => url.trim())
        .filter(url => url.length > 0);

      const response = await fetch("/api/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ urls }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Успешно!",
          description: data.message,
        });
        setCustomUrls("");
      } else {
        toast({
          title: "Ошибка",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить уведомления",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateSitemap = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sitemap/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Успешно!",
          description: data.message,
        });
      } else {
        toast({
          title: "Ошибка",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить sitemap",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateAll = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/seo/update-all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Успешно!",
          description: data.message,
        });
      } else {
        toast({
          title: "Ошибка",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось обновить SEO данные",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const allUrls = [
    "https://lavillapine.onrender.com/",
    "https://lavillapine.onrender.com/about",
    "https://lavillapine.onrender.com/gallery",
    "https://lavillapine.onrender.com/contacts",
    "https://lavillapine.onrender.com/booking"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageMeta {...SEO_PAGES.admin} />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Администрирование SEO</h1>
              <p className="text-gray-600">
                Управление уведомлениями для поисковых систем через протокол IndexNow
              </p>
            </div>
            <Button 
              onClick={handleUpdateAll}
              disabled={isSubmitting}
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  Обновление...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-5 w-5" />
                  Обновить всё
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Sitemap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Файл sitemap.xml автоматически обновляется и доступен по адресу:
              </p>
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <code className="text-sm">
                  https://lavillapine.onrender.com/sitemap.xml
                </code>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant="outline">
                  Активен
                </Badge>
                <Button 
                  onClick={handleUpdateSitemap}
                  disabled={isSubmitting}
                  variant="outline"
                  size="sm"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Обновление...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Обновить
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                IndexNow Key
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Ключ для протокола IndexNow доступен по адресу:
              </p>
              <div className="bg-gray-100 p-3 rounded-lg">
                <code className="text-sm">
                  https://lavillapine.onrender.com/indexnow-key.txt
                </code>
              </div>
              <Badge variant="outline" className="mt-2">
                Настроен
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Уведомить все страницы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Отправить уведомление в Yandex и Bing о всех страницах сайта
              </p>
              <div className="space-y-2 mb-4">
                {allUrls.map((url, index) => (
                  <div key={index} className="text-sm font-mono bg-gray-50 p-2 rounded">
                    {url}
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleNotifyAll}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Уведомить все страницы
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Уведомить конкретные URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="custom-urls">URL для уведомления</Label>
                  <Textarea
                    id="custom-urls"
                    placeholder="https://lavillapine.onrender.com/about&#10;https://lavillapine.onrender.com/gallery"
                    value={customUrls}
                    onChange={(e) => setCustomUrls(e.target.value)}
                    rows={8}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Введите по одному URL на строку
                  </p>
                </div>
                <Button 
                  onClick={handleNotifyCustom}
                  disabled={isSubmitting || !customUrls.trim()}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Уведомить выбранные URL
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Информация о протоколе IndexNow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                <strong>IndexNow</strong> — это протокол, позволяющий автоматически уведомлять поисковые системы об изменениях на сайте.
              </p>
              <p>
                Поддерживаемые поисковые системы: Yandex, Bing, Microsoft
              </p>
              <p>
                Уведомления отправляются автоматически при каждом запросе и помогают ускорить индексацию новых или обновленных страниц.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}