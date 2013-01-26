var UNSUPPORTED_FUNCTIONS = [
  {
    "name": "ASC",
    "url": "http://office.microsoft.com/en-us/excel-help/asc-function-HA102753116.aspx",
    "platform": "Microsoft Excel",
    "reason": "Specific to Microsoft Excel's handling of Double-byte character set (DBCS) languages",
    "planned": false
  },
  {
    "name": "BAHTTEXT",
    "url": "http://office.microsoft.com/en-us/excel-help/bahttext-function-HA102753106.aspx",
    "platform": "Microsoft Excel",
    "reason": "Specific to a locale",
    "planned": false
  },
  {
    "name": "BESSELI",
    "url": "http://office.microsoft.com/en-us/excel-help/besseli-function-HA102753105.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "BESSELJ",
    "url": "http://office.microsoft.com/en-us/excel-help/besselj-function-HA102753104.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "BESSELK",
    "url": "http://office.microsoft.com/en-us/excel-help/besselk-function-HA102753103.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "BESSELY",
    "url": "http://office.microsoft.com/en-us/excel-help/bessely-function-HA102753102.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "CHISQ.DIST.RT",
    "url": "http://office.microsoft.com/en-us/excel-help/chisq-dist-rt-function-HA102753165.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "CHISQ.INV.RT",
    "url": "http://office.microsoft.com/en-us/excel-help/chisq-inv-rt-function-HA102753164.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "CHISQ.TEST",
    "url": "http://office.microsoft.com/en-us/excel-help/chisq-test-function-HA102753163.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "DBCS",
    "url": "http://office.microsoft.com/en-us/excel-help/dbcs-function-HA102752962.aspx",
    "platform": "Microsoft Excel",
    "reason": "Specific to Microsoft Excel's handling of Double-byte character set (DBCS) languages",
    "planned": false
  },
  {
    "name": "ERF.PRECISE",
    "url": "http://office.microsoft.com/en-us/excel-help/erf-precise-function-HA102752807.aspx",
    "platform": "Microsoft Excel",
    "reason": "Redundant with ERF",
    "planned": false
  },
  {
    "name": "ERFC.PRECISE",
    "url": "http://office.microsoft.com/en-us/excel-help/erfc-precise-function-HA102752806.aspx",
    "platform": "Microsoft Excel",
    "reason": "Redundant with ERFC",
    "planned": false
  },
  {
    "name": "F.DIST.RT",
    "url": "http://office.microsoft.com/en-us/excel-help/chisq-inv-rt-function-HA102753164.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "F.INV.RT",
    "url": "http://office.microsoft.com/en-us/excel-help/f-inv-rt-function-HA102753157.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "F.TEST",
    "url": "http://office.microsoft.com/en-us/excel-help/f-test-function-HA102753156.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "GAMMA.DIST",
    "url": "http://office.microsoft.com/en-us/excel-help/gamma-dist-function-HA102753155.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "GAMMA.INV",
    "url": "http://office.microsoft.com/en-us/excel-help/gamma-inv-function-HA102753154.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "GAMMALN.PRECISE",
    "url": "http://office.microsoft.com/en-us/excel-help/gammaln-precise-function-HA102752805.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "LOGEST",
    "url": "http://office.microsoft.com/en-us/excel-help/logest-function-HA102752951.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "NEGBINOM.DIST",
    "url": "http://office.microsoft.com/en-us/excel-help/negbinom-dist-function-HA102753149.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "PHONETIC",
    "url": "http://office.microsoft.com/en-us/excel-help/phonetic-function-HA102752905.aspx",
    "platform": "Microsoft Excel",
    "reason": "Specific to Microsoft Excel's handling of Double-byte character set (DBCS) languages",
    "planned": false
  },
  {
    "name": "T.DIST.2T",
    "url": "http://office.microsoft.com/en-us/excel-help/t-dist-2t-function-HA102753138.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "T.DIST.RT",
    "url": "http://office.microsoft.com/en-us/excel-help/t-dist-rt-function-HA102753130.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "T.INV.2T",
    "url": "http://office.microsoft.com/en-us/excel-help/t-inv-2t-function-HA102753136.aspx",
    "platform": "Microsoft Excel",
    "reason": "Definition unclear",
    "planned": true
  },
  {
    "name": "T.TEST",
    "url": "http://office.microsoft.com/en-us/excel-help/t-test-function-HA102753135.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  },
  {
    "name": "TREND",
    "url": "http://office.microsoft.com/en-us/excel-help/trend-function-HA102752832.aspx",
    "platform": "Microsoft Excel",
    "reason": "No JavaScript implementation found",
    "planned": true
  }
]