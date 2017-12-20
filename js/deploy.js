mIfl = "http://59.41.253.10:7781/"
mIfq = "http://59.41.253.10:7782/";
mIfm = "http://59.41.253.10:7783/";
mIfg = "http://59.41.253.14:7778/";
mIfm2  = "http://222.200.122.53:7783/";
var mifq_plugin = "http://zbs003.d1.natapp.cc/";
var mifq_input  = "http://zbs004.d1.natapp.cc/";

var post = window.location.host.split(":")[0];
if (post.indexOf("zhaobenshu.com") >= 0) {
    mIfl = "http://59.41.253.10:7781/"
    mIfq = "http://59.41.253.10:7782/";
    mIfm = "http://59.41.253.10:7783/";
    mIfg = "http://59.41.253.14:7778/";
	mIfm2  = "http://222.200.122.53:7783/";
    mifq_plugin = "http://222.200.122.209:7781/";
    mifq_input = "http://222.200.122.209:7782/";

} else if (post.indexOf("222.200.122") >= 0) {
    mIfl = "http://222.200.122.34:7781/"
    mIfq = "http://222.200.122.34:7782/";
    mIfm = "http://222.200.122.34:7783/";
    mIfg = "http://222.200.122.32:7778/";
	mIfm2  = "http://222.200.122.53:7783/";

    mifq_plugin = "http://222.200.122.209:7781/";
    mifq_input = "http://222.200.122.209:7782/";

} else if (post.indexOf("59.41.253") >= 0) {
    mIfl = "http://59.41.253.10:7781/"
    mIfq = "http://59.41.253.10:7782/";
    mIfm = "http://59.41.253.10:7783/";
    mIfg = "http://59.41.253.14:7778/";
	 mIfm2  = "http://222.200.122.53:7783/";
} else {
    mIfl = "http://59.41.253.10:7781/"
    mIfq = "http://59.41.253.10:7782/";
    mIfm = "http://59.41.253.10:7783/";
    mIfg = "http://59.41.253.14:7778/";
	mIfm2  = "http://222.200.122.53:7783/";
}
