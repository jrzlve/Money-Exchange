
module.exports = function makeExchange(currency) {
    const H = 50, Q = 25, D = 10, N = 5, P = 1, result = {};
    function MyError(property) {
        Error.call(this, property) ;
        this.error = "You are rich, my friend! We don\'t have so much coins for exchange";
    }
    MyError.prototype = Object.create(Error.prototype);
    if(currency>10000) return new MyError();
    if (currency <= 0) return result;
    else if(currency > 0){
        let h = Math.floor(currency/H);
        let q = Math.floor((currency - h*H)/Q);
        let d = Math.floor((currency - (h*H + q*Q))/D);
        let n = Math.floor((currency - (h*H + q*Q + d*D))/N);
        let p = Math.floor((currency - (h*H + q*Q + d*D + n*N))/P);
        if (h != 0) result.H = h;
        if (q != 0) result.Q = q;
        if (d != 0) result.D = d;
        if (n != 0) result.N = n;
        if (p != 0) result.P = p;
        return result;
    }
}
