import React from "react";
import { Clock10, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sky-200 text-sky-700 py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Important Links Section */}
          <div className="p-4">
            <h2 className="text-lg font-medium border-b-2 border-sky-700 mb-4">
              Important Links
            </h2>
            <div className="text-sm font-light space-y-2">
              <Link href="#" className="block hover:underline">
                Paediatrics Intensive Care
              </Link>
              <Link href="#" className="block hover:underline">
                Neonatology
              </Link>
              <Link href="#" className="block hover:underline">
                Paediatrics Surger
              </Link>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="p-4">
            <h2 className="text-lg font-medium border-b-2 border-sky-700 mb-4">
              Contact Details
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={28} color="black" strokeWidth={0.5} />
                <div>
                  <p>
                    Rani Hospital Managed by Dukhharan Memorial Charitable Trust
                  </p>
                  <p>
                    Behind Machali Ghar Booty Road, Ranchi- 834001, Jharkhand,
                    INDIA
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone size={28} color="black" strokeWidth={0.5} />
                <div>
                  <p>
                    <strong>Phone:</strong> +91-7677111010
                  </p>
                  <p>
                    <strong>Telephone:</strong> 0651-2360430, 0651-2360435,
                    18002574010
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail size={28} color="black" strokeWidth={0.5} />
                <div>
                  <p>
                    <strong>Email:</strong> info@ranihospital.com
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock10 size={28} color="black" strokeWidth={0.5} />
                <div>
                  <p>
                    <strong>Hours:</strong> Monday - Friday: 9:30 AM to 6:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Section (if needed) */}
          <div className="p-4 hidden lg:block">
            <h2 className="text-lg font-medium border-b-2 border-sky-700 mb-4">
              Additional Info
            </h2>
            {/* You can add more content here */}
          </div>
        </div>
      </div>

      <div className="bg-primary text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          <Link href="#" className="hover:underline text-sm">Privacy Policy
           
          </Link>
          <p className="text-sm">
            © {new Date().getFullYear()} Rani Hospital, Ranchi. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
