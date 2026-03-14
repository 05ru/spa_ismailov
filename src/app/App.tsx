import { useState } from "react";
import { motion } from "motion/react";
import computerEquipmentImage from "../assets/computer-equipment.jpg";
import developmentImage from "../assets/development.jpg";
import householdAppliancesImage from "../assets/household-appliances.jpg";
import officeEquipmentImage from "../assets/office-equipment.jpg";
import phonesAndGadgetsImage from "../assets/phones-and-gadgets.jpg";
import bannerImage from "../assets/banner-img.webp";
import { 
  Monitor, 
  Smartphone, 
  Home, 
  Code, 
  Wrench, 
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Laptop,
  Printer,
  Tv,
  Utensils,
  Lightbulb,
  MessageSquare
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Monitor className="w-8 h-8 text-blue-600" />
              <div className="ml-3">
                <div className="text-xl font-semibold text-gray-900">ИП Исмаилов</div>
                <div className="text-xs text-gray-500">Техника и IT-услуги</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("hero")} className="text-gray-700 hover:text-blue-600 transition">
                Главная
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600 transition">
                О нас
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition">
                Услуги
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-gray-700 hover:text-blue-600 transition">
                Прайс-лист
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition">
                Контакты
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection("hero")} className="text-gray-700 hover:text-blue-600 transition text-left">
                  Главная
                </button>
                <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-blue-600 transition text-left">
                  О нас
                </button>
                <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition text-left">
                  Услуги
                </button>
                <button onClick={() => scrollToSection("pricing")} className="text-gray-700 hover:text-blue-600 transition text-left">
                  Прайс-лист
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition text-left">
                  Контакты
                </button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                ИП Исмаилов Абдулкадыр Вагабович
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ваш надежный партнер в сфере электроники, компьютерной техники и IT-услуг в Махачкале
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Связаться с нами
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition border-2 border-blue-600"
                >
                  Наши услуги
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={bannerImage}
                alt="Магазин электроники"
                className="rounded-2xl shadow-2xl w-full"
                width={1080}
                height={720}
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <ChevronDown className="w-8 h-8 text-blue-600 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О нашей компании</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем широкий ассортимент товаров и услуг для вашего бизнеса и дома
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-8 hover:shadow-lg transition"
            >
              <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Розничная торговля</h3>
              <p className="text-gray-600">
                Компьютеры, офисная техника, телекоммуникационное оборудование, бытовая техника, мебель и товары для дома
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-8 hover:shadow-lg transition"
            >
              <Code className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IT-услуги</h3>
              <p className="text-gray-600">
                Разработка программного обеспечения, создание веб-сайтов, внедрение CRM-систем, IT-аудит и консалтинг
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-orange-50 rounded-xl p-8 hover:shadow-lg transition"
            >
              <Wrench className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ремонт техники</h3>
              <p className="text-gray-600">
                Профессиональный ремонт компьютеров, ноутбуков, телевизоров, аудиотехники и другой электроники
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги и товары</h2>
            <p className="text-xl text-gray-600">Полный спектр решений для вашего бизнеса</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Service 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc((100%-4rem)/3)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={computerEquipmentImage}
                alt="Компьютеры"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Laptop className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Компьютеры и ноутбуки</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Ноутбуки, ПК для офиса и игр, мониторы от ведущих производителей
                </p>
                <p className="text-blue-600 font-semibold">от 8 490 ₽</p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc((100%-4rem)/3)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={phonesAndGadgetsImage}
                alt="Смартфоны"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Smartphone className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Телефоны и гаджеты</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Смартфоны, планшеты, наушники, портативные колонки и аксессуары
                </p>
                <p className="text-blue-600 font-semibold">от 1 290 ₽</p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc((100%-4rem)/3)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={officeEquipmentImage}
                alt="Офисная техника"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Printer className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Офисная техника</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Принтеры, МФУ, ламинаторы и другое офисное оборудование
                </p>
                <p className="text-blue-600 font-semibold">от 4 300 ₽</p>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc((100%-4rem)/3)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={householdAppliancesImage}
                alt="Бытовая техника"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Home className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Бытовая техника</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Холодильники, стиральные машины, пылесосы, микроволновые печи
                </p>
                <p className="text-blue-600 font-semibold">от 1 800 ₽</p>
              </div>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] xl:w-[calc((100%-4rem)/3)] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img 
                src={developmentImage}
                alt="IT-услуги"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Code className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Разработка ПО</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Сайты, интернет-магазины, CRM-системы, индивидуальное ПО
                </p>
                <p className="text-blue-600 font-semibold">от 45 000 ₽</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600">Актуальные цены на товары и услуги</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Computers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Laptop className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Компьютеры</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Ноутбуки базовые</span>
                  <span className="font-semibold text-gray-900">от 29 900 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Ноутбуки для бизнеса</span>
                  <span className="font-semibold text-gray-900">от 54 500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">ПК офисные</span>
                  <span className="font-semibold text-gray-900">от 33 800 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">ПК игровые</span>
                  <span className="font-semibold text-gray-900">от 97 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Мониторы</span>
                  <span className="font-semibold text-gray-900">от 8 490 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* Office Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Printer className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Офисное оборудование</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Принтер струйный</span>
                  <span className="font-semibold text-gray-900">от 9 700 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Принтер лазерный</span>
                  <span className="font-semibold text-gray-900">от 14 900 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">МФУ</span>
                  <span className="font-semibold text-gray-900">от 16 800 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Ламинаторы</span>
                  <span className="font-semibold text-gray-900">от 4 300 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Программное обеспечение</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Установка ОС</span>
                  <span className="font-semibold text-gray-900">2 500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Лицензия ОС</span>
                  <span className="font-semibold text-gray-900">от 7 200 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Офисный пакет</span>
                  <span className="font-semibold text-gray-900">от 5 500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Антивирус (1 год)</span>
                  <span className="font-semibold text-gray-900">1 990 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* Telecommunications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Телекоммуникации</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Смартфоны</span>
                  <span className="font-semibold text-gray-900">от 12 490 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Кнопочные телефоны</span>
                  <span className="font-semibold text-gray-900">от 1 790 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Планшеты</span>
                  <span className="font-semibold text-gray-900">от 18 900 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Наушники</span>
                  <span className="font-semibold text-gray-900">от 1 290 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Портативные колонки</span>
                  <span className="font-semibold text-gray-900">от 3 400 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* Electronics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Tv className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Аудио и видео</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Телевизоры</span>
                  <span className="font-semibold text-gray-900">от 27 800 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Фотоаппараты</span>
                  <span className="font-semibold text-gray-900">от 42 000 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* Home Appliances */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Бытовая техника</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Стиральные машины</span>
                  <span className="font-semibold text-gray-900">от 31 500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Холодильники</span>
                  <span className="font-semibold text-gray-900">от 36 800 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Пылесосы</span>
                  <span className="font-semibold text-gray-900">от 9 200 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Микроволновые печи</span>
                  <span className="font-semibold text-gray-900">от 7 400 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Электрочайники</span>
                  <span className="font-semibold text-gray-900">от 1 800 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* Furniture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-amber-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Мебель и товары для дома</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Компьютерные столы</span>
                  <span className="font-semibold text-gray-900">от 7 900 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Кресла офисные</span>
                  <span className="font-semibold text-gray-900">от 8 600 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Светильники</span>
                  <span className="font-semibold text-gray-900">от 2 700 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Посуда (набор)</span>
                  <span className="font-semibold text-gray-900">от 1 900 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* IT Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">IT-услуги (разработка)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Лендинг</span>
                  <span className="font-semibold text-gray-900">от 45 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Корпоративный сайт</span>
                  <span className="font-semibold text-gray-900">от 85 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Интернет-магазин</span>
                  <span className="font-semibold text-gray-900">от 110 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Индивидуальное ПО</span>
                  <span className="font-semibold text-gray-900">от 160 000 ₽</span>
                </div>
              </div>
            </motion.div>

            {/* IT Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">IT-услуги (поддержка)</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Доработки</span>
                  <span className="font-semibold text-gray-900">2 500 ₽/час</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">IT-аудит</span>
                  <span className="font-semibold text-gray-900">от 25 000 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Внедрение CRM</span>
                  <span className="font-semibold text-gray-900">от 35 000 ₽</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным для вас способом</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Наши контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Телефон</p>
                    <a href="tel:89884695430" className="text-blue-600 hover:text-blue-700 transition">
                      +7 (988) 469-54-30
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:ABDULKADYR.ISM70@MAIL.RU" className="text-blue-600 hover:text-blue-700 transition break-all">
                      ABDULKADYR.ISM70@MAIL.RU
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Юридический адрес</p>
                    <p className="text-gray-700">
                      367015, Республика Дагестан,<br />
                      г. Махачкала, улица Багандова, д. 1а
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">ИП Исмаилов Абдулкадыр Вагабович</h4>
                <p className="text-gray-700 text-sm">
                  Официально зарегистрированная организация, предоставляющая качественные товары и услуги
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Форма обратной связи</h3>
              
              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Спасибо за обращение!</h4>
                  <p className="text-gray-700">Мы свяжемся с вами в ближайшее время</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Номер телефона
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                      placeholder="Опишите ваш запрос..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl font-semibold"
                  >
                    Отправить сообщение
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Отправляя форму, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Monitor className="w-8 h-8 text-blue-400" />
                <div className="ml-3">
                  <div className="text-lg font-semibold">ИП Исмаилов</div>
                  <div className="text-sm text-gray-400">Техника и IT-услуги</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Широкий ассортимент компьютерной техники, электроники и профессиональные IT-услуги в Махачкале
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Телефон: +7 (988) 469-54-30</p>
                <p>Email: ABDULKADYR.ISM70@MAIL.RU</p>
                <p>г. Махачкала, ул. Багандова, д. 1а</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Продажа компьютеров и техники</p>
                <p>Разработка программного обеспечения</p>
                <p>Ремонт электроники</p>
                <p>IT-консалтинг</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 ИП Исмаилов Абдулкадыр Вагабович. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
