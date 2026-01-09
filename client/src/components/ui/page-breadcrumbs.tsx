import { Link, useLocation } from "wouter";
import { ChevronRight, Home as HomeIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

// Определяем названия страниц для навигационных цепочек
const PAGE_NAMES: Record<string, string> = {
  '/': 'Главная',
  '/about': 'О нас',
  '/gallery': 'Галерея',
  '/contacts': 'Контакты',
  '/booking': 'Бронирование',
  '/rules': 'Правила',
  '/privacy-policy': 'Политика конфиденциальности',
  '/consent': 'Согласие на обработку данных',
  '/legal-documents': 'Юридические документы',
  '/admin': 'Админ-панель'
};

export default function PageBreadcrumbs() {
  const [location] = useLocation();
  
  // Не показываем breadcrumbs на главной странице
  if (location === '/') {
    return null;
  }

  // Формируем массив breadcrumb элементов
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Главная', href: '/' }
  ];

  // Получаем текущую страницу
  const currentPageName = PAGE_NAMES[location];
  
  if (currentPageName) {
    breadcrumbItems.push({ name: currentPageName });
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList className="text-white/80">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return (
              <BreadcrumbItem key={item.name}>
                {!isLast && item.href ? (
                  <>
                    <BreadcrumbLink asChild>
                      <Link 
                        href={item.href}
                        className="flex items-center gap-1.5 hover:text-primary transition-colors"
                      >
                        {index === 0 && <HomeIcon className="w-4 h-4" />}
                        <span>{item.name}</span>
                      </Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator>
                      <ChevronRight className="w-4 h-4 text-white/40" />
                    </BreadcrumbSeparator>
                  </>
                ) : (
                  <BreadcrumbPage className="text-white font-medium">
                    {item.name}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
