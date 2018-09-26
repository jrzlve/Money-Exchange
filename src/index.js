
module.exports = function makeExchange(currency) {
    const H = 50, Q = 25, D = 10, N = 5, P = 1;
    const result = {};

    function MyError(property) {
        Error.call(this, property) ;
        this.error = "You are rich, my friend! We don\'t have so much coins for exchange";
    }
    MyError.prototype = Object.create(Error.prototype);
    if(currency>10000){
        return new MyError();
    }
    if (currency <= 0) return result;
    else if(currency > 0){
        let h = currency/H >> 0;
        let q = (currency - h*H)/Q >> 0;
        let d = (currency - (h*H + q*Q))/D >> 0;
        let n = (currency - (h*H + q*Q + d*D))/N >> 0;
        let p = (currency - (h*H + q*Q + d*D + n*N))/P >> 0;
        if (h != 0) result.H = h;
        if (q != 0) result.Q = q;
        if (d != 0) result.D = d;
        if (n != 0) result.N = n;
        if (p != 0) result.P = p;
        return result;
    }
        
}
