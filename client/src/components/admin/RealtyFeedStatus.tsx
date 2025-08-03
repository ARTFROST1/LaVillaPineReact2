import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

// Компонент для проверки статуса фидов недвижимости
export const RealtyFeedStatus: React.FC = () => {
  const [ymlStatus, setYmlStatus] = useState<'idle' | 'checking' | 'success' | 'error'>('idle');
  const [xmlStatus, setXmlStatus] = useState<'idle' | 'checking' | 'success' | 'error'>('idle');
  const [jsonStatus, setJsonStatus] = useState<'idle' | 'checking' | 'success' | 'error'>('idle');

  const checkFeedStatus = async (type: 'yml' | 'xml' | 'json') => {
    const setState = type === 'yml' ? setYmlStatus : type === 'xml' ? setXmlStatus : setJsonStatus;
    setState('checking');
    
    try {
      const response = await fetch(`/realty-feed.${type}`);
      if (response.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch (error) {
      setState('error');
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Фиды недвижимости для Яндекса
        </CardTitle>
        <CardDescription>
          Специальные фиды для отображения в блоках недвижимости Яндекса
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* YML Feed (основной) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">YML фид <span className="text-xs bg-green-100 text-green-800 px-1 rounded">основной</span></h4>
              {getStatusIcon(ymlStatus)}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => checkFeedStatus('yml')}
                disabled={ymlStatus === 'checking'}
              >
                {ymlStatus === 'checking' ? 'Проверка...' : 'Проверить'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="/realty-feed.yml" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Открыть
                </a>
              </Button>
            </div>
          </div>

          {/* XML Feed */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">XML фид</h4>
              {getStatusIcon(xmlStatus)}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => checkFeedStatus('xml')}
                disabled={xmlStatus === 'checking'}
              >
                {xmlStatus === 'checking' ? 'Проверка...' : 'Проверить'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="/realty-feed.xml" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Открыть
                </a>
              </Button>
            </div>
          </div>

          {/* JSON Feed */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">JSON фид</h4>
              {getStatusIcon(jsonStatus)}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => checkFeedStatus('json')}
                disabled={jsonStatus === 'checking'}
              >
                {jsonStatus === 'checking' ? 'Проверка...' : 'Проверить'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href="/realty-feed.json" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Открыть
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg">
          <h5 className="font-medium mb-2">Инструкции для настройки в Яндекс.Вебмастере:</h5>
          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Перейдите в Яндекс.Вебмастер → Сниппеты и ответы → Дополненное представление</li>
            <li>Выберите раздел "Недвижимость"</li>
            <li>Добавьте URL фида: <code>https://lavillapine.onrender.com/realty-feed.yml</code></li>
            <li>Дождитесь обработки фида (обычно 1-7 дней)</li>
            <li>Проверьте отображение в поисковой выдаче</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealtyFeedStatus;