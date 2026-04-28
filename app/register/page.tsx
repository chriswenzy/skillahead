"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";

export default function RegistrationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      <RegistrationContent />
    </Suspense>
  );
}

function RegistrationContent() {
  const searchParams = useSearchParams();
  const initialCourse = searchParams.get("course") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state_origin: "",
    age: "",
    gender: "",
    course: initialCourse,
    location: "Physical",
    timing: "Weekday",
    month: "May",
    agreed: false
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!formData.agreed) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your actual key
          subject: `New Registration: ${formData.name} - ${formData.course}`,
          from_name: "SkillAhead Academy",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("Submission failed. Please try again or contact support.");
      }
    } catch (error) {
      alert("An error occurred. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = [
    "Single Data Package",
    "Combo Data Package",
    "Career Data Package",
    "Frontend Web Development",
    "Fullstack Web Development"
  ];

  const months = ["May", "June", "July", "August"];

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <ScrollReveal>
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-100 text-center max-w-2xl space-y-8">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary text-4xl">✓</div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Registration Received!</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Thank you for choosing SkillAhead, <span className="text-primary font-bold">{formData.name}</span>. <br />
                Our admissions team has received your application for the <span className="font-bold">{formData.course}</span>. 
                We will contact you within 24 hours at <span className="font-bold">{formData.email}</span>.
              </p>
            </div>
            <div className="pt-8">
              <a href="/" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all">Return Home</a>
            </div>
          </div>
        </ScrollReveal>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-12 gap-12 text-slate-900">
        
        {/* Left Side: Summary & Trust */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Registration</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
                Start Your <br /> Mastery <span className="text-primary italic">Journey.</span>
              </h1>
              <p className="text-slate-500 font-medium leading-relaxed">
                Complete the form to secure your spot in our next cohort. Our admissions team will contact you within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6 text-sm">
              <h3 className="font-black text-slate-900 uppercase tracking-widest">Enrolling for:</h3>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-primary">{formData.course || "No course selected"}</p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">✓</div>
                  <span>Expert-led mentorship</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">✓</div>
                  <span>Practical, project-based curriculum</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">✓</div>
                  <span>Career support & networking</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Side: Form */}
        <div className="col-span-12 lg:col-span-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-primary/5 border border-slate-100 overflow-hidden min-h-[600px] flex flex-col">
              
              {/* Progress Bar */}
              <div className="h-2 w-full bg-slate-100 flex">
                <motion.div 
                  className="bg-primary h-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                />
              </div>

              <div className="p-8 md:p-16 flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">Bio Data</h2>
                        <p className="text-slate-500 font-medium">Tell us a bit about yourself.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2 text-slate-900">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-slate-900"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 text-slate-900">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                          <input 
                            type="email" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-slate-900"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 text-slate-900">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                          <input 
                            type="tel" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-slate-900"
                            placeholder="+234 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 text-slate-900">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">State of Origin</label>
                          <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-slate-900"
                            placeholder="Enter state"
                            value={formData.state_origin}
                            onChange={(e) => setFormData({...formData, state_origin: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 text-slate-900">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Age</label>
                          <input 
                            type="number" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-slate-900"
                            placeholder="e.g. 25"
                            value={formData.age}
                            onChange={(e) => setFormData({...formData, age: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2 text-slate-900">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Gender</label>
                          <div className="flex gap-4">
                            {["Male", "Female", "Other"].map(g => (
                              <button 
                                key={g}
                                onClick={() => setFormData({...formData, gender: g})}
                                className={`flex-1 py-4 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${formData.gender === g ? "bg-primary border-primary text-white" : "bg-slate-50 border-slate-100 text-slate-400 hover:border-primary/20"}`}
                              >
                                {g}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-8 flex justify-end">
                        <button onClick={nextStep} className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all">Next Section</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">Selection</h2>
                        <p className="text-slate-500 font-medium">Choose your course and preferred schedule.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select Specialization</label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {courses.map(c => (
                              <button 
                                key={c}
                                onClick={() => setFormData({...formData, course: c})}
                                className={`text-left p-5 rounded-xl border font-bold text-xs transition-all flex items-center justify-between ${formData.course === c ? "bg-primary border-primary text-white shadow-xl" : "bg-slate-50 border-slate-100 text-slate-600 hover:border-primary/20"}`}
                              >
                                {c}
                                {formData.course === c && <span>✓</span>}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Class Location</label>
                              <div className="flex gap-3">
                                {["Physical", "Online"].map(l => (
                                  <button 
                                    key={l}
                                    onClick={() => setFormData({...formData, location: l})}
                                    className={`flex-1 py-4 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${formData.location === l ? "bg-slate-900 border-slate-900 text-white" : "bg-slate-50 border-slate-100 text-slate-400"}`}
                                  >
                                    {l}
                                  </button>
                                ))}
                              </div>
                           </div>
                           <div className="space-y-3">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Timing</label>
                              <div className="flex gap-3">
                                {["Weekday", "Weekend"].map(t => (
                                  <button 
                                    key={t}
                                    onClick={() => setFormData({...formData, timing: t})}
                                    className={`flex-1 py-4 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all ${formData.timing === t ? "bg-slate-900 border-slate-900 text-white" : "bg-slate-50 border-slate-100 text-slate-400"}`}
                                  >
                                    {t}
                                  </button>
                                ))}
                              </div>
                           </div>
                        </div>

                        <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Start Month</label>
                          <select 
                             className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 outline-none focus:border-primary transition-colors font-medium text-slate-900 appearance-none bg-no-repeat bg-[right_20px_center]"
                             value={formData.month}
                             onChange={(e) => setFormData({...formData, month: e.target.value})}
                          >
                             {months.map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="pt-8 flex justify-between">
                        <button onClick={prevStep} className="text-slate-400 font-black uppercase tracking-widest text-xs hover:text-slate-800 transition-colors">Go Back</button>
                        <button onClick={nextStep} className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-2xl transition-all">Review & Pay</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900">Final Step</h2>
                        <p className="text-slate-500 font-medium">Review the policy and secure your slot.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-6">
                           <div className="flex justify-between items-center">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Intellectual Property & Refund Policy</h4>
                              <a href="#" className="text-primary text-[10px] font-black uppercase underline decoration-2 underline-offset-4">Download PDF</a>
                           </div>
                           <div className="max-h-40 overflow-y-auto text-sm text-slate-500 font-medium leading-relaxed pr-4 custom-scrollbar">
                              <p>By registering for a course at SkillAhead, you agree to the following terms:</p>
                              <p className="mt-2 text-xs">1. All course materials are the intellectual property of SkillAhead and may not be shared or redistributed.</p>
                              <p className="mt-2 text-xs">2. Tuition fees are non-refundable after the first 7 days of the cohort start date.</p>
                              <p className="mt-2 text-xs">3. Attendance of 80% is required to be eligible for certification and career support modules.</p>
                              <p className="mt-2 text-xs">4. SkillAhead reserves the right to modify the schedule with prior notice to all students.</p>
                              {/* Add more policy lines as needed */}
                           </div>
                           <label className="flex items-center gap-4 cursor-pointer group">
                              <input 
                                type="checkbox" 
                                className="w-6 h-6 rounded-lg border-2 border-slate-200 checked:bg-primary transition-all appearance-none relative checked:after:content-['✓'] after:absolute after:inset-0 after:flex after:items-center after:justify-center after:text-white after:font-bold after:text-xs text-slate-900"
                                checked={formData.agreed}
                                onChange={(e) => setFormData({...formData, agreed: e.target.checked})}
                              />
                              <span className="text-xs font-bold text-slate-800 uppercase tracking-widest group-hover:text-primary transition-colors">I accept the terms and conditions</span>
                           </label>
                        </div>

                        <div className="bg-primary-deep p-8 rounded-3xl text-white space-y-6">
                           <div className="flex justify-between items-end">
                              <div className="space-y-1">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Total Tuition</p>
                                 <p className="text-4xl font-black tracking-tighter">₦ ---,---</p>
                              </div>
                              <div className="text-right">
                                 <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Next Cohort</p>
                                 <p className="font-bold text-white">{formData.month}</p>
                              </div>
                           </div>
                        </div>
                      </div>

                      <div className="pt-8 flex flex-col gap-4">
                        <button 
                           onClick={handleSubmit}
                           disabled={!formData.agreed || isSubmitting}
                           className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all shadow-2xl flex items-center justify-center gap-3 ${formData.agreed && !isSubmitting ? "bg-primary text-white shadow-primary/20 hover:scale-[1.02]" : "bg-slate-100 text-slate-300 cursor-not-allowed"}`}
                        >
                           {isSubmitting ? (
                             <>
                               <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                               Processing Application...
                             </>
                           ) : "Complete Payment & Enroll"}
                        </button>
                        <button onClick={prevStep} className="mx-auto text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-slate-800 transition-colors">Go Back</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </main>
  );
}
