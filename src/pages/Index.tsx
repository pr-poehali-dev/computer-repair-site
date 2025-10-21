import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

function Index() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    problem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', device: '', problem: '' });
  };

  const services = [
    { icon: 'Cpu', title: 'Ремонт ПК', desc: 'Диагностика и ремонт настольных компьютеров' },
    { icon: 'Laptop', title: 'Ремонт ноутбуков', desc: 'Замена комплектующих, чистка, прошивка' },
    { icon: 'HardDrive', title: 'Восстановление данных', desc: 'Спасение информации с поврежденных носителей' },
    { icon: 'Zap', title: 'Апгрейд системы', desc: 'Модернизация и улучшение производительности' },
    { icon: 'Shield', title: 'Удаление вирусов', desc: 'Очистка от вредоносного ПО' },
    { icon: 'Network', title: 'Настройка сети', desc: 'Построение и настройка локальных сетей' },
  ];

  const prices = [
    { service: 'Диагностика', price: 'Бесплатно' },
    { service: 'Чистка от пыли', price: 'от 500₽' },
    { service: 'Замена термопасты', price: 'от 300₽' },
    { service: 'Установка Windows', price: 'от 800₽' },
    { service: 'Замена жесткого диска', price: 'от 1000₽' },
    { service: 'Ремонт материнской платы', price: 'от 2000₽' },
  ];

  const repairTypes = [
    { type: 'Экспресс', time: '1-2 часа', desc: 'Срочный ремонт в день обращения' },
    { type: 'Стандарт', time: '1-3 дня', desc: 'Плановый ремонт с диагностикой' },
    { type: 'Сложный', time: '3-7 дней', desc: 'Ремонт на уровне компонентов' },
  ];

  const reviews = [
    { name: 'Алексей М.', text: 'Отличная работа! Восстановили данные с убитого HDD', rating: 5 },
    { name: 'Мария К.', text: 'Быстро починили ноутбук, теперь летает!', rating: 5 },
    { name: 'Дмитрий П.', text: 'Профессионалы своего дела. Рекомендую!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-500/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Monitor" className="text-gray-400" size={32} />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500">
              10RegService
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Услуги', 'Прайс', 'Ремонт', 'Гарантии', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-stone-300 hover:text-gray-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-500 hover:bg-gray-500/10"
              >
                <Icon name="Menu" size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l border-gray-500/30 w-64">
              <div className="flex flex-col gap-6 mt-8">
                {['Услуги', 'Прайс', 'Ремонт', 'Гарантии', 'Отзывы', 'Контакты'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl text-stone-300 hover:text-gray-400 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white animate-fade-in" style={{textShadow: '0 0 20px rgba(156,163,175,0.8), 0 0 40px rgba(156,163,175,0.4)'}}>
            КОМПЬЮТЕРНАЯ
            <br />
            МАСТЕРСКАЯ
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ремонт техники из будущего в настоящем
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold text-lg px-8 py-6 rounded-none border-2 border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.5)] hover:shadow-[0_0_30px_rgba(156,163,175,0.7)] transition-all duration-300"
              onClick={() => document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth' })}
            >
              БЕСПЛАТНАЯ ДИАГНОСТИКА
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold text-lg px-8 py-6 rounded-none border-2 border-gray-500 shadow-[0_0_20px_rgba(107,114,128,0.5)] hover:shadow-[0_0_30px_rgba(107,114,128,0.7)] transition-all duration-300"
            >
              <a href="tel:+79991234567" className="flex items-center gap-2">
                <Icon name="Phone" size={24} />
                ПОЗВОНИТЬ
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-neutral-950/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            НАШИ УСЛУГИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-neutral-900/50 border-2 border-gray-500/30 hover:border-gray-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(156,163,175,0.4)] group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-gray-500 to-gray-600 rounded-none">
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-stone-200 group-hover:text-gray-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-stone-400">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            ПРАЙС-ЛИСТ
          </h2>
          <Card className="bg-black border-2 border-gray-500/30">
            <CardContent className="p-0">
              <div className="divide-y divide-gray-500/20">
                {prices.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-6 hover:bg-gray-500/10 transition-colors">
                    <span className="text-stone-200 text-lg">{item.service}</span>
                    <Badge className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold text-lg px-4 py-2">
                      {item.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ремонт" className="py-20 px-4 bg-neutral-950/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            ВИДЫ РЕМОНТА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repairTypes.map((repair, idx) => (
              <Card key={idx} className="bg-neutral-900/50 border-2 border-gray-500/30 hover:border-gray-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-400">{repair.type}</CardTitle>
                  <CardDescription className="text-xl text-stone-300">{repair.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-400">{repair.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="гарантии" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            ГАРАНТИИ И СРОКИ
          </h2>
          <Card className="bg-neutral-900/50 border-2 border-gray-500/30">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Shield" className="text-gray-400 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-stone-200 mb-2">Гарантия на работу</h3>
                  <p className="text-stone-400 text-lg">До 12 месяцев на все виды ремонта</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-gray-500 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-stone-200 mb-2">Сроки выполнения</h3>
                  <p className="text-stone-400 text-lg">От 1 часа до 7 дней в зависимости от сложности</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle" className="text-gray-500 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-stone-200 mb-2">Качество деталей</h3>
                  <p className="text-stone-400 text-lg">Используем только оригинальные комплектующие</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="diagnosis" className="py-20 px-4 bg-neutral-950/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            ОНЛАЙН-ДИАГНОСТИКА
          </h2>
          <p className="text-center text-stone-300 mb-12 text-lg">Опишите проблему — мы оценим стоимость ремонта</p>
          <Card className="bg-neutral-900/50 border-2 border-gray-500/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-stone-200 text-lg">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-gray-500/50 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-stone-200 text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-black border-gray-500/50 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="device" className="text-stone-200 text-lg">Тип устройства</Label>
                  <Input
                    id="device"
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    placeholder="Ноутбук, ПК, планшет..."
                    className="bg-black border-gray-500/50 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="problem" className="text-stone-200 text-lg">Описание проблемы</Label>
                  <Textarea
                    id="problem"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="Подробно опишите, что случилось..."
                    className="bg-black border-orange-500/50 text-white mt-2 min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold text-lg py-6 rounded-none border-2 border-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.5)] hover:shadow-[0_0_30px_rgba(156,163,175,0.7)] transition-all duration-300"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="bg-neutral-900/50 border-2 border-gray-500/30">
                <CardHeader>
                  <CardTitle className="text-gray-400">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-gray-500 fill-gray-500" size={20} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-400">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-neutral-950/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-12 text-white" style={{textShadow: '0 0 15px rgba(156,163,175,0.6)'}}>
            КОНТАКТЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Icon name="Phone" className="text-gray-400" size={48} />
              <p className="text-xl text-stone-200">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="Mail" className="text-gray-500" size={48} />
              <p className="text-xl text-stone-200">info@10regservice.ru</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="MapPin" className="text-gray-500" size={48} />
              <p className="text-xl text-stone-200">г. Москва, ул. Будущего, 42</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-gray-500/20 bg-black">
        <div className="container mx-auto text-center">
          <p className="text-stone-400">© 2025 10RegService. Ремонт из будущего</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;