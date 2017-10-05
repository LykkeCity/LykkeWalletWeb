function datafeedService(rangeStartDate, rangeEndDate) {

  this.rangeStartDate = this.convertChartDateToApiDateFormat(rangeStartDate);
  this.rangeEndDate = this.convertChartDateToApiDateFormat(rangeEndDate);
  this.url = 'https://apiv2-dev.lykkex.net/api/CandleSticks';
  this.fullApiUrl = this.createApiUrl();
}

datafeedService.prototype.init = function () {

  this.bindEvents();
  return this.getData(this.fullApiUrl);
};

// TODO connect with event angular and datafeed service
datafeedService.prototype.bindEvents = function () {};

datafeedService.prototype.getData = function (url) {

  return $.ajax({
    type: 'GET',
    url: url
  });
};

datafeedService.prototype.convertChartDateToApiDateFormat = function (time) {

  var convertToRealTimestamp = time*1000,
      day = new Date(convertToRealTimestamp).getDate(),
      month = new Date(convertToRealTimestamp).getMonth() + 1,
      year = new Date(convertToRealTimestamp).getFullYear();

  return year + '-' + month + '-' + day;
};

datafeedService.prototype.createApiUrl = function () {
  // TODO connect datafeed.service with angular 4 and get dynamic assets pair/Mid or Bid Or Ask/time period
  return this.url + '/BTCUSD/Mid/Day/' + this.rangeStartDate + '/' + this.rangeEndDate;
};

datafeedService.prototype.convertApiDataToChartFormat = function (data) {

  var newDataFormat = { t: [], o: [], h: [], l: [], c: [], v: [], s: 'ok', nb: '' };
  var noDataFormat = {s: '', nb: ''};
  // TODO Test Volume awaiting this property from API v2
  var volume = [21701760, 29736835, 21453089, 28779313, 24358443, 36235956, 64041043, 37586787, 35192406, 35652191, 23624896, 24553478, 20034594, 24125801, 23192665, 23538673, 48128970, 66134219, 34562045, 37861662, 26419398, 43825812, 28331709, 26932602, 30836997, 32560000, 24254179, 59176361, 57134541, 34143898, 51175504, 32264510, 58840522, 27632003, 28428917, 29264571, 25965534, 27426394, 11475922, 27193983, 28528750, 36162258, 37086862, 26527997, 34324540, 26195462, 29998719, 27068316, 34402627, 26374377, 43733811, 34031834, 46524544, 44351134, 27779423, 21424965, 23783165, 26085854, 14249484, 18296855, 20905892, 15039519, 30586265, 28781865, 21118116, 22193587, 31751900, 33561948, 24462051, 27588593, 27086220, 26111948, 34439843, 23712961, 25597291, 32597892, 22050218, 23211038, 32586673, 26337576, 20562944, 30377503, 49200993, 111985040, 33710411, 24507301, 26845924, 38183841, 23004072, 28349859, 20065458, 23035421, 33226223, 35623100, 22584555, 22198197, 24507156, 20836932, 20788186, 21776585, 20257426, 23482860, 36414585, 26210984, 21571121, 21750044, 17446297, 18707236, 22155904, 19612801, 17421717, 15309065, 25691774, 19231998, 43884952, 21542038, 39529912, 25860165, 20346301, 22395563, 23575094, 33374805, 29189955, 21207252, 19661651, 19985714, 19891354, 27717854, 21149034, 16658543, 18933397, 30379376, 20350000, 17822880, 16582094, 14697544, 17328375, 23319562, 17320928, 17116599, 18216472, 19614287, 13948980, 20247187, 32818760, 39752670, 45142806, 23275690, 26787359, 48339210, 35942435, 25670456, 25596687, 32221756, 25700983, 19904679, 49482818, 33159664, 26733798, 22340069, 19430358, 19118319, 19044463, 21632202, 20034934, 23162873, 16180143, 27285861, 24803858, 26249630, 20678772, 20771367, 64176149, 71563614, 33749154, 31224203, 31348832, 49180748, 31449132, 24572170, 21064679, 18673365, 25997976, 25524661, 24423643, 21915939, 31116980, 22328979, 14276812, 20758795, 23374374, 18505351, 21030466, 18311156, 23617964, 24922788, 19961788, 23243713, 17713795, 20615419, 17053326, 24671002, 21122730, 18612649, 15172136, 32175875, 16832947, 19422655, 24725526, 69222793, 26000738, 20349532, 35775675, 25640394, 39081017, 25943187, 21754810, 27936774, 27321761, 26925694, 27012525, 26145653, 21297812, 19198189, 19029621, 25015218, 25279674, 29307862, 26973946, 26412439, 16508568, 29317054, 21179047, 21722995, 28183159, 31028926, 71139119, 44393752, 23073646, 48203642, 27939718, 20347352, 51693239, 36643382, 46114424, 43922334];
  var now = new Date();
  now = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())) / 1000;

  if (data.length > 0) {

    for(var i = 0; i < data.length; i++) {
      var time = new Date(data[i].DateTime.split('T')[0]).getTime()/1000;
      newDataFormat.t.push(time);
      newDataFormat.o.push(data[i].Open);
      newDataFormat.h.push(data[i].High);
      newDataFormat.l.push(data[i].Low);
      newDataFormat.c.push(data[i].Close);
      newDataFormat.v.push(volume[i]);
    }

    return newDataFormat;

  } else {
    // TODO prevent infinte loop after no data [bug in the tradingview library]
    noDataFormat.s = 'no_data';
    noDataFormat.nb = now - 86400;

    return noDataFormat;
  }
};
