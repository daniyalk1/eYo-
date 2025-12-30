function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-600 mb-2">eYo!</h3>
          <p className="text-gray-600 mb-4">Healthy Food Delivery in Karachi</p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} eYo!. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

