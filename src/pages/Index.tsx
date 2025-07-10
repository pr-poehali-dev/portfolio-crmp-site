import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioProjects = [
    {
      title: "Игровой сервер RolePlay",
      description:
        "Полная настройка сервера с уникальными фракциями и системой экономики",
      technologies: ["PAWN", "MySQL", "Pawno"],
      price: "от 15,000 ₽",
      features: ["Система домов", "Фракции", "Работы", "Банковская система"],
    },
    {
      title: "Система администрирования",
      description:
        "Комплексная панель администратора с расширенными возможностями",
      technologies: ["PAWN", "PHP", "JavaScript"],
      price: "от 8,000 ₽",
      features: [
        "Логирование",
        "Статистика",
        "Управление игроками",
        "Банхаммер",
      ],
    },
    {
      title: "Кастомные моды и скрипты",
      description: "Разработка уникальных модификаций под ваши потребности",
      technologies: ["PAWN", "SA-MP", "Plugins"],
      price: "от 3,000 ₽",
      features: ["Уникальные системы", "Оптимизация", "Техподдержка"],
    },
  ];

  const services = [
    {
      name: "Разработка сервера с нуля",
      description: "Полный цикл создания игрового сервера",
      price: "от 20,000 ₽",
      duration: "2-4 недели",
      includes: ["Концепция", "Программмирование", "Тестирование", "Запуск"],
    },
    {
      name: "Доработка существующего сервера",
      description: "Улучшение и расширение функционала",
      price: "от 5,000 ₽",
      duration: "1-2 недели",
      includes: ["Анализ кода", "Новые функции", "Исправления", "Оптимизация"],
    },
    {
      name: "Техническое сопровождение",
      description: "Поддержка и обновления сервера",
      price: "от 10,000 ₽/мес",
      duration: "Постоянно",
      includes: [
        "Мониторинг",
        "Обновления",
        "Поддержка 24/7",
        "Резервное копирование",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      role: "Владелец сервера",
      text: "Отличная работа! Сервер работает стабильно уже полгода, игроки довольны.",
      rating: 5,
    },
    {
      name: "Дмитрий К.",
      role: "Администратор",
      text: "Профессиональный подход, все сделано качественно и в срок.",
      rating: 5,
    },
    {
      name: "Игорь С.",
      role: "Разработчик",
      text: "Помог доработать сложные системы, код чистый и понятный.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Icon name="Code" className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                CRMP Portfolio
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Портфолио
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Услуги
              </a>
              <a
                href="#prices"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Цены
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Связаться</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Профессиональная разработка
            <br />
            для CRMP серверов
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Создаю качественные игровые сервера с уникальным функционалом. Более
            50 успешных проектов за 5 лет работы.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Посмотреть работы
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры моих работ в сфере разработки CRMP серверов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative">
                  <img
                    src={
                      index === 0
                        ? "/img/7f8cc168-36ab-40d4-bde6-2d3ed4b84ba5.jpg"
                        : index === 1
                          ? "/img/727ff8af-7cfa-4249-8323-4e85f0daa6ae.jpg"
                          : "/img/62a75c3a-ae5e-47d2-b6b6-5b9509e21d74.jpg"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-blue-600"
                    >
                      {project.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Icon
                      name="Server"
                      className="h-6 w-6 text-blue-600 mr-2"
                    />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">
                        Технологии:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">
                        Особенности:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Icon
                              name="Check"
                              className="h-4 w-4 text-green-500 mr-2"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для создания и поддержки CRMP серверов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Icon name="Settings" className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.duration}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-3">
                        Что входит:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {service.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <Icon
                              name="Check"
                              className="h-4 w-4 text-green-500 mr-2"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о моей работе довольные клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon name="User" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Готов обсудить ваш проект?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Свяжитесь со мной для получения консультации и расчета стоимости
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="h-6 w-6" />
                  <span>crmp.developer@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MessageCircle" className="h-6 w-6" />
                  <span>Telegram: @crmp_dev</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" className="h-6 w-6" />
                  <span>Время работы: 10:00 - 22:00 (МСК)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Быстрая связь</h3>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  Написать на email
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                  Telegram
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                >
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Code" className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">CRMP Portfolio</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональная разработка игровых серверов CRMP
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Github" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Mail" className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                © 2024 CRMP Portfolio. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
