import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/theme/theme-provider";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Navigation */}
        <nav className="border-b dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <a href="/" className="text-2xl font-bold">
                  HealthyHarvest
                </a>
                <div className="hidden md:flex space-x-6">
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Products
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Our Farms
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    About
                  </a>
                  <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                    Stories
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost">Sign In</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Shop</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Seasonal Box</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Produce</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Spices</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">About Us</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Careers</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Press</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:underline">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t dark:border-gray-800">
              <p className="text-center text-gray-600 dark:text-gray-300">
                © 2024 HealthyHarvest. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}