import React, { useState } from 'react';
import { Car, Calendar, Shield, CreditCard, ChevronRight, CheckCircle, Camera, Smartphone, MapPin, AlertCircle, Star } from 'lucide-react';

// 10 High-Quality Professional Fleet Vehicles with Real Image URLs
const CAR_FLEET = [
  { id: 1, name: 'Tesla Model 3', type: 'Electric', price: 85, range: '350 mi range', feature: 'Autopilot Enhanced', rating: 4.9, image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Toyota RAV4 Hybrid', type: 'Hybrid', price: 65, range: '580 mi total', feature: 'AWD All-Weather', rating: 4.8, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'VW Golf GTI', type: 'Gas', price: 55, range: '34 mpg avg', feature: 'Guaranteed Model Match', rating: 4.7, image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'BMW 3 Series', type: 'Gas', price: 95, range: '29 mpg avg', feature: 'M-Sport Premium Trim', rating: 4.9, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Ford Mustang GT', type: 'Gas', price: 110, range: '24 mpg avg', feature: 'V8 Performance Package', rating: 4.8, image: 'https://images.unsplash.com/photo-1611245801211-19af432e737c?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Audi e-tron', type: 'Electric', price: 130, range: '285 mi range', feature: 'Quattro Smart EV System', rating: 5.0, image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Honda Civic Sport', type: 'Gas', price: 45, range: '38 mpg avg', feature: 'EcoAssist Suite Optimizer', rating: 4.6, image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Hyundai Ioniq 5', type: 'Electric', price: 90, range: '300 mi range', feature: 'Ultra-Fast 800V Charging', rating: 4.9, image: 'https://images.unsplash.com/photo-1669818817478-f71f65f0ca2c?auto=format&fit=crop&w=600&q=80' },
  { id: 9, name: 'Jeep Wrangler 4xe', type: 'Hybrid', price: 105, range: '370 mi total', feature: 'Trail-Rated Plug-In Hybrid', rating: 4.7, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80' },
  { id: 10, name: 'Mercedes-Benz C-Class', type: 'Gas', price: 115, range: '31 mpg avg', feature: 'Executive Luxury Pack', rating: 4.9, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80' },
];

export default function App() {
  const [selectedCar, setSelectedCar] = useState(CAR_FLEET[0]);
  const [days, setDays] = useState(3);
  const [insurance, setInsurance] = useState(false);
  const [activeTab, setActiveTab] = useState('browse');
  const [scanStep, setScanStep] = useState('upload');
  const [scannedFeatures, setScannedFeatures] = useState<string[]>([]);

  const basePrice = selectedCar.price * days;
  const insurancePrice = insurance ? 25 * days : 0;
  const totalAmount = basePrice + insurancePrice;

  const handleAiScan = () => {
    setScanStep('analyzing');
    setTimeout(() => {
      setScanStep('complete');
      setScannedFeatures(['Pre-existing body scuff logged on right trim', 'Tread depth verified', 'Fluid metrics compliant']);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <Car className="w-6 h-6" />
            <span>DriveNow Hub</span>
          </div>
          <nav className="flex gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
            <button onClick={() => setActiveTab('browse')} className={`px-2.5 sm:px-3 py-2 rounded-lg transition-colors ${activeTab === 'browse' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>1. Fleet</button>
            <button onClick={() => setActiveTab('damage-scan')} className={`px-2.5 sm:px-3 py-2 rounded-lg transition-colors ${activeTab === 'damage-scan' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>2. AI Scan</button>
            <button onClick={() => setActiveTab('key-activation')} className={`px-2.5 sm:px-3 py-2 rounded-lg transition-colors ${activeTab === 'key-activation' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>3. Mobile Key</button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'browse' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Fleet List Container */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Verified Premium Fleet</h2>
                <p className="text-slate-500 text-sm mt-1">Guaranteed models with a 2-hour sanitation safety window.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CAR_FLEET.map((car) => (
                  <div 
                    key={car.id} 
                    onClick={() => setSelectedCar(car)}
                    className={`group rounded-xl border overflow-hidden transition-all cursor-pointer bg-white flex flex-col justify-between ${
                      selectedCar.id === car.id ? 'border-blue-600 ring-2 ring-blue-100 shadow-md' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm text-slate-700">{car.type}</span>
                    </div>

                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-base text-slate-800 leading-tight">{car.name}</h3>
                          <div className="flex items-center gap-0.5 text-amber-500 text-xs shrink-0 font-semibold">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <span>{car.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{car.range} • {car.feature}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Model Tag Verified</span>
                        <span className="font-bold text-lg text-slate-900">${car.price}<span className="text-xs font-normal text-slate-500">/day</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Pricing Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 sticky top-24">
                <h3 className="font-bold text-lg flex items-center gap-2 border-b border-slate-100 pb-3">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Transparent Summary</span>
                </h3>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Rental Duration</label>
                  <input type="range" min="1" max="14" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full accent-blue-600 cursor-pointer" />
                  <div className="text-sm font-medium text-slate-700">{days} Days Selected</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="text-xs font-semibold">Full Protection Insurance</p>
                      <p className="text-[10px] text-slate-400">Zero deductible wrapper</p>
                    </div>
                  </div>
                  <input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer" />
                </div>

                <div className="space-y-2 text-sm text-slate-600 border-t border-dashed border-slate-200 pt-4">
                  <div className="flex justify-between"><span>Selected: {selectedCar.name}</span><span className="font-medium text-slate-900">${basePrice}</span></div>
                  {insurance && <div className="flex justify-between"><span>Premium Insurance Protection</span><span className="font-medium text-slate-900">${insurancePrice}</span></div>}
                  <div className="flex justify-between font-bold text-base text-slate-900 border-t border-slate-100 pt-3"><span>Estimated Total</span><span className="text-blue-600">${totalAmount}</span></div>
                </div>

                <button onClick={() => { setActiveTab('damage-scan'); window.scrollTo(0,0); }} className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg text-sm flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-100">
                  <span>Confirm Fleet Reservation</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* AI Damage Portal Section */}
        {activeTab === 'damage-scan' && (
          <div className="max-w-xl mx-auto bg-white p-6 rounded-xl border border-slate-200 space-y-6 shadow-sm">
            <div className="text-center">
              <h2 className="text-xl font-bold">AI Damage Verification System</h2>
              <p className="text-slate-500 text-xs mt-1">Logs instant cross-referenced physical telemetry matrix diagnostics.</p>
            </div>

            {scanStep === 'upload' && (
              <div className="border-2 border-dashed border-slate-200 p-8 rounded-xl text-center space-y-4 bg-slate-50">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto"><Camera className="w-6 h-6" /></div>
                <div>
                  <button onClick={handleAiScan} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm hover:bg-blue-700 transition-colors">Initialize Pre-Rental Scanning</button>
                  <p className="text-[11px] text-slate-400 mt-2">Registers high-resolution photo data sets</p>
                </div>
              </div>
            )}

            {scanStep === 'analyzing' && (
              <div className="p-8 text-center space-y-3">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm font-medium text-slate-600">Cross-referencing chassis condition parameters...</p>
              </div>
            )}

            {scanStep === 'complete' && (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 text-green-800 rounded-lg text-xs flex items-center gap-2 font-medium"><CheckCircle className="w-4 h-4 shrink-0" /> Integrity logs saved. Metadata securely stamped.</div>
                <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Diagnostic Logs:</p>
                  {scannedFeatures.map((f, idx) => <p key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">✓ {f}</p>)}
                </div>
                <button onClick={() => { setActiveTab('key-activation'); window.scrollTo(0,0); }} className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Generate Mobile Handshake Key</button>
              </div>
            )}
          </div>
        )}

        {/* Contactless Activation Section */}
        {activeTab === 'key-activation' && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-xl border border-slate-200 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner"><Smartphone className="w-8 h-8" /></div>
            <div>
              <h2 className="text-xl font-bold">Biometric Handshake Active</h2>
              <p className="text-slate-500 text-xs mt-1">Direct vehicle token configuration. Encrypted proximity authentication link completes upon reaching unit range zone.</p>
            </div>
            <div className="p-4 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs flex items-start gap-2 text-left leading-relaxed">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
              <span>Identity Assertion Matrix: Driver verification OCR record profiles matches biometric handshake token validation properties securely.</span>
            </div>
            <button onClick={() => alert('Secure proximity key broadcast engaged. Pull chassis door handle to clear locks!')} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-xl text-sm shadow-md shadow-green-100 transition-colors">Activate Proximity Bluetooth Key</button>
          </div>
        )}
      </main>
    </div>
  );
                                                                                                                                                                   }
