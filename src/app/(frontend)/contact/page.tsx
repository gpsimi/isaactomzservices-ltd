'use client'

import { Header } from '@/components/frontend/layout/Header'
import { Footer } from '@/components/frontend/layout/Footer'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '../../../hooks/use-toast'

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit message')
      }

      toast({
        title: 'Message Sent',
        description: 'Thank you for your inquiry. Check your email for your Ticket Number.',
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-charcoal">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-construction-red" />
                <span className="text-warm-concrete text-sm tracking-[0.2em] uppercase font-medium">
                  Contact Us
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-tight mb-6">
                Begin Your Project
              </h1>
              <p className="text-warm-concrete text-lg md:text-xl max-w-2xl leading-relaxed">
                Ready to transform your vision into reality? Get in touch with our team to discuss
                your project requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section bg-background">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="h-12 bg-light-concrete border-steel-line focus:border-construction-red"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="h-12 bg-light-concrete border-steel-line focus:border-construction-red"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX"
                        className="h-12 bg-light-concrete border-steel-line focus:border-construction-red"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      className="bg-light-concrete border-steel-line focus:border-construction-red resize-none"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button variant="accent" size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Request a Consultation'}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-construction-red flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-pure-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:+2348080321720"
                        className="text-muted-foreground hover:text-construction-red transition-colors"
                      >
                        +234 808 032 1720
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-construction-red flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-pure-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:isaactomzservicesltd@gmail.com"
                        className="text-muted-foreground hover:text-construction-red transition-colors break-all"
                      >
                        isaactomzservicesltd@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-construction-red flex items-center justify-center shrink-0">
                      <Instagram size={20} className="text-pure-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Instagram</h3>
                      <a
                        href="https://instagram.com/isaactomzservicesltd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-construction-red transition-colors"
                      >
                        @isaactomzservicesltd
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-construction-red flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-pure-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Nigeria</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-12 p-8 bg-light-concrete">
                  <h3 className="font-heading font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
