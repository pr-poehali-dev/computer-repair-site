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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Monitor" className="text-cyan-400" size={32} />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              10RegService
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            {['Услуги', 'Прайс', 'Ремонт', 'Гарантии', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cyan-300 hover:text-pink-400 transition-colors duration-300"
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
                className="text-cyan-400 hover:text-pink-400 hover:bg-pink-500/10"
              >
                <Icon name="Menu" size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-950 border-l border-cyan-500/30 w-64">
              <div className="flex flex-col gap-6 mt-8">
                {['Услуги', 'Прайс', 'Ремонт', 'Гарантии', 'Отзывы', 'Контакты'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl text-cyan-300 hover:text-pink-400 transition-colors duration-300"
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-violet-500 animate-fade-in">
            КОМПЬЮТЕРНАЯ
            <br />
            МАСТЕРСКАЯ
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Ремонт техники из будущего в настоящем
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-6 rounded-none border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,20,147,0.7)] transition-all duration-300"
            onClick={() => document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth' })}
          >
            БЕСПЛАТНАЯ ДИАГНОСТИКА
          </Button>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            НАШИ УСЛУГИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="bg-slate-900/50 border-2 border-cyan-500/30 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,20,147,0.4)] group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-none">
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-cyan-300 group-hover:text-pink-400 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="прайс" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            ПРАЙС-ЛИСТ
          </h2>
          <Card className="bg-slate-900/50 border-2 border-cyan-500/30">
            <CardContent className="p-0">
              <div className="divide-y divide-cyan-500/20">
                {prices.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-6 hover:bg-pink-500/10 transition-colors">
                    <span className="text-cyan-300 text-lg">{item.service}</span>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold text-lg px-4 py-2">
                      {item.price}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ремонт" className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            ВИДЫ РЕМОНТА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {repairTypes.map((repair, idx) => (
              <Card key={idx} className="bg-slate-900/50 border-2 border-pink-500/30 hover:border-violet-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-pink-400">{repair.type}</CardTitle>
                  <CardDescription className="text-xl text-cyan-300">{repair.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{repair.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="гарантии" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
            ГАРАНТИИ И СРОКИ
          </h2>
          <Card className="bg-slate-900/50 border-2 border-violet-500/30">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Shield" className="text-cyan-400 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">Гарантия на работу</h3>
                  <p className="text-slate-400 text-lg">До 12 месяцев на все виды ремонта</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="text-pink-400 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-pink-300 mb-2">Сроки выполнения</h3>
                  <p className="text-slate-400 text-lg">От 1 часа до 7 дней в зависимости от сложности</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle" className="text-violet-400 mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-violet-300 mb-2">Качество деталей</h3>
                  <p className="text-slate-400 text-lg">Используем только оригинальные комплектующие</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="diagnosis" className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
            ОНЛАЙН-ДИАГНОСТИКА
          </h2>
          <p className="text-center text-cyan-300 mb-12 text-lg">Опишите проблему — мы оценим стоимость ремонта</p>
          <Card className="bg-slate-900/50 border-2 border-cyan-500/30">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-cyan-300 text-lg">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-950 border-cyan-500/50 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-cyan-300 text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-950 border-cyan-500/50 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="device" className="text-cyan-300 text-lg">Тип устройства</Label>
                  <Input
                    id="device"
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    placeholder="Ноутбук, ПК, планшет..."
                    className="bg-slate-950 border-cyan-500/50 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="problem" className="text-cyan-300 text-lg">Описание проблемы</Label>
                  <Textarea
                    id="problem"
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="Подробно опишите, что случилось..."
                    className="bg-slate-950 border-cyan-500/50 text-white mt-2 min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold text-lg py-6 rounded-none border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(255,20,147,0.7)] transition-all duration-300"
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
          <h2 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="bg-slate-900/50 border-2 border-violet-500/30">
                <CardHeader>
                  <CardTitle className="text-pink-400">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-slate-950/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            КОНТАКТЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Icon name="Phone" className="text-cyan-400" size={48} />
              <p className="text-xl text-cyan-300">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="Mail" className="text-pink-400" size={48} />
              <p className="text-xl text-pink-300">info@10regservice.ru</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="MapPin" className="text-violet-400" size={48} />
              <p className="text-xl text-violet-300">г. Москва, ул. Будущего, 42</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-cyan-500/20 bg-slate-950">
        <div className="container mx-auto text-center">
          <p className="text-cyan-400">© 2025 10RegService. Ремонт из будущего</p>
        </div>
      </footer>
    </div>
  );
}

export default Index;