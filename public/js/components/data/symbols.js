import React from 'react';

const nyse = ['BAC','GE','RAD','HLF','WFC','C','CHK','PFE','FCX','AA','RF','INFY','VRX','F','WLL','PBR','WFT','CIG','JPM','MS','EMC','TWTR','T','MRO','KMI','DAL','WMB','VALE','VZ','QIHU','ABX','KEY','ITUB','S','RIG','APFH','ORCL','ECA','LN','KO','PBRA','USB','KGC','XOM','AKS','HPQ','JCP','FMSA','MPC','NKE','BABA','ABBV','X','HPE','HST','SWN','MT','NOK','GM','PG','MET','K','SCHW','NLY','CX','V','ABEV','MRK','SDRL','ABT','KR','BMY','IAG','AZN','FIT','LC','OAS','ETE','JNJ','SYF','CBS','GGB','CLF','BCS','TEVA','HL','POT','MON','VER','CCL','LYG','BSX','DNR','CVX','BP','WMT','TSM','AMH','LUV','STI'];
const stockSymbs = ['AAL','AAPL','ADBE','ADI','ADP','ADSK','AKAM','ALXN','AMAT','AMGN','AMZN','ATVI','AVGO','BBBY','BIDU','BIIB','BMRN','CA','CELG','CERN','CHKP','CHTR','CMCSA','COST','CSCO','CSX','CTRP','CTSH','CTXS','DISCA','DISCK','DISH','DLTR','EA','EBAY','ENDP','ESRX','EXPE','FAST','FB','FISV','FOX','FOXA','GILD','GOOG','GOOGL','HSIC','ILMN','INCY','INTC','INTU','ISRG','JD','KHC','LBTYA','LBTYK','LLTC','LRCX','LVNTA','MAR','MAT','MDLZ','MNST','MSFT','MU','MXIM','MYL','NCLH','NFLX','NTAP','NTES','NVDA','NXPI','ORLY','PAYX','PCAR','PCLN','PYPL','QCOM','QVCA','REGN','ROST','SBAC','SBUX','SIRI','SRCL','STX','SWKS','SYMC','TMUS','TRIP','TSCO','TSLA','TXN','ULTA','VIAB','VOD','VRSK','VRTX','WBA','WDC','WFM','XLNX','XRAY','YHOO'];
const nasdaqOptions = stockSymbs.map((symbs, ii) => {
		return	<option key={symbs} value={symbs} >{symbs}</option>;
});
const nyseOptions = nyse.map((symbs, ii) => {
		return	<option key={symbs} value={symbs} >{symbs}</option>;
});

const exchangeOpts = {
	NASDAQ: nasdaqOptions,
	NYSE: nyseOptions
}

module.exports = exchangeOpts;