import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, CheckCircle, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

const BookingForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    consultationType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Consultation Request Sent!",
      description: "We'll contact you within 24 hours to schedule your free consultation.",
    })
    setFormData({
      name: "",
      surname: "",
      email: "",
      phone: "",
      consultationType: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Book Your <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Free Consultation</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to transform your health naturally? Schedule your personalized consultation 
              and take the first step towards lasting wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-semibold mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {[
                  "Comprehensive health assessment",
                  "Personalized treatment plan",
                  "Natural healing roadmap", 
                  "Lifestyle recommendations",
                  "Ongoing support guidance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-secondary/10 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Quick Call Option</h4>
                </div>
                <p className="text-muted-foreground mb-3">
                  Prefer to speak directly? Call us now for immediate assistance.
                </p>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                  Call +91 98765 43210
                </Button>
              </div>
            </div>

            {/* Form */}
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="font-serif text-xl flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Schedule Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">First Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="surname" className="text-sm">Last Name *</Label>
                      <Input
                        id="surname"
                        name="surname"
                        type="text"
                        required
                        value={formData.surname}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="consultationType" className="text-sm">Consultation Type *</Label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      required
                      value={formData.consultationType}
                      onChange={handleChange}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select type</option>
                      <option value="online">Online Consultation</option>
                      <option value="offline">In-Person Consultation</option>
                      <option value="either">Either (I'm flexible)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1"
                      rows={3}
                      placeholder="Tell us about your health goals..."
                    />
                  </div>

                  <Button type="submit" variant="healing" size="lg" className="w-full">
                    <CheckCircle className="w-5 h-5" />
                    Book Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingForm