    document.addEventListener('DOMContentLoaded', function(){
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('header .nav');
        const sNav = document.querySelector('header .s-nav');
        toggle && toggle.addEventListener('click', function(){
        nav.classList.toggle('open');
        sNav && sNav.classList.toggle('open');
    });

    function format(n){ return '$' + n.toFixed(2); }
    const rows = document.querySelectorAll('.cart-table tbody tr');
    function updateSummary(){
        let subtotal = 0;
        rows.forEach(r => {
            const price = parseFloat(r.querySelector('.price').textContent.replace('$',''));
            const qty = parseInt(r.querySelector('.qty input').value,10);
            const sub = price * qty;
            r.querySelector('.subtotal').textContent = format(sub);
            subtotal += sub;
        });
        const shipping = subtotal > 0 ? 10 : 0;
        document.querySelector('.cart-summary .amount').textContent = format(subtotal);
        document.querySelector('.cart-summary .total .amount').textContent = format(subtotal + shipping);
    }
        rows.forEach(r => r.querySelector('.qty input').addEventListener('change', updateSummary));
        updateSummary();
    });
    
    document.addEventListener('DOMContentLoaded', function(){
        var n = document.querySelectorAll('.cart-table tbody tr').length;
        var b = document.querySelector('.badge');
        if (b && n) { b.textContent = n; b.hidden = false; }
    });