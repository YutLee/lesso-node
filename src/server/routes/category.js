import { proxy, categoryProxy } from '../proxy/config';

export default function(req, res, next) {
	const subCategory = [
    [
      {code: '3801200000', name: '线缆'},
      {code: '3801600000', name: '开关'},
      {code: '3801400000', name: '仪表'}
    ], [
      {code: '1601000000', name: '手动'},
      {code: '1601100000', name: '电动'},
      {code: '1601300000', name: '气动'}
    ], [
      {code: '7601000000', name: '油漆'},
      {code: '7601500000', name: '防水'},
      {code: '7601100000', name: '涂料'}
    ], [
      {code: '7801000000', name: '板材'},
      {code: '7801200000', name: '地板'},
      {code: '7801300000', name: '壁纸'}
    ], [
      {code: '4801200000', name: '龙头'},
      {code: '4801500000', name: '挂件'},
      {code: '4801600000', name: '浴缸'}
    ], [
      {code: '4601000000', name: '光源'},
      {code: '4601900002', name: '灯具'},
      {code: '4601500000', name: '厨电'}
    ], [
      {code: '8601500000', name: '鞋'},
      {code: '8601000000', name: '帽'},
      {code: '8601400000', name: '手套'}
    ], [
      {code: '2601000000', name: '合页'},
      {code: '2601100000', name: '锁具'},
      {code: '2601500000', name: '门控'}
    ], [
      {code: '5601400000', name: '铜管件'},
      {code: '5602000000', name: '钢阀门'}
    ], [
      {code: '2801000000', name: '发电'},
      {code: '2801300000', name: '水泵'},
      {code: '2801400000', name: '轴承'}
    ], [
      {code: '1801100000', name: '螺钉'},
      {code: '1801200000', name: '螺母'},
      {code: '1801300000', name: '螺栓'}
    ], [
      {code: '5802400000', name: '焊管'},
      {code: '5801000000', name: '排水'},
      {code: '5802300000', name: '灌溉'}
    ], [
      {code: '6801000000', name: '灭火器'},
      {code: '6801100000', name: '消防栓'}
    ], [
      {code: '3601000000', name: '电焊'},
      {code: '3601300000', name: '耗材'},
      {code: '3601200000', name: '辅件'}
    ], [
      {code: '8801100000', name: '五金'},
      {code: '8801000000', name: '工具'},
      {code: '8801300000', name: '照明'}
    ]
	];

	proxy(categoryProxy.url).then(function(data) {
		console.log(data, 111)
		data.category.forEach((item, idx) => {
			item.subCategory = subCategory[idx];
		});

		req.category = data.category;

		next();
	}).catch(function(err) {
		req.category = [];
		next();
		console.log(666, err);
	});
}
