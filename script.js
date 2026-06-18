// لما يفتح صفحة Contact.html يجيب اسم المنتج من الرابط
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if (product) {
      document.getElementById('product').value = product;
    }
  };
  
  // لما يضغط على زرار Send Order يفتح واتساب برسالة جاهزة
  document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
  
    // رقم واتسابك (غيريه برقمك الحقيقي)
    const whatsappNumber = "201234567890"; 
  
    const message = `New Order:%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}%0AProduct: ${product}`;
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  
    window.open(url, '_blank');
  });
  