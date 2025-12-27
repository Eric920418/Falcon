'use client'

import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock submission - in production, you'd send this to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@example.com',
      link: 'mailto:contact@example.com'
    },
    {
      icon: Phone,
      title: '電話',
      content: '+886 2 1234 5678',
      link: 'tel:+886212345678'
    },
    {
      icon: MapPin,
      title: '地址',
      content: '台北市信義區信義路五段7號',
      link: null
    }
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            聯絡我們
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            準備好開始您的數位轉型之旅了嗎？讓我們一起討論如何幫助您的品牌成長
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl mb-8 text-white">取得聯繫</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-white hover:text-cyan-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <h4 className="text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                營業時間
              </h4>
              <div className="space-y-2 text-slate-300">
                <p>週一至週五：09:00 - 18:00</p>
                <p>週六：10:00 - 17:00</p>
                <p className="text-slate-500">週日及國定假日公休</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-slate-300 mb-2">
                  公司名稱
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="您的公司名稱（選填）"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  訊息內容 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="請告訴我們您的需求..."
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full py-4 rounded-xl text-white flex items-center justify-center gap-2 transition-all ${
                  isSubmitted 
                    ? 'bg-green-600 shadow-lg shadow-green-500/50' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30'
                }`}
                whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"
                    />
                    已送出！我們會盡快回覆您
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    送出訊息
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
