'use strict';

mrmedia.service('AAnchorSrv', ['$resource','$http', 'baseURL' ,function ($resource, $http, baseURL) {
  this.managerList = [
    {
      name: '秦波',
      status: '在播中',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    },
    {
      name: '秦波',
      status: '不在播',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '13966661666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦波',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '秦博',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'4',
      father: '谭靖儒',
      idno:'123456789012345678',
      anchor:'5'
    },
    {
      name: '张嘉琦',
      tel: '1396666666',
      level:'5',
      father: '秦博',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '张嘉琦',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'5',
      father: '秦博',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '张嘉琦',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'5',
      father: '秦博',
      idno:'123456789012345678',
      anchor:'5'
    }
    ,
    {
      name: '张嘉琦',
      tel: '1396666666',
      wechat: 'qinbosb',
      level:'5',
      father: '秦博',
      idno:'123456789012345678',
      anchor:'5'
    }
  ];
  this.anchorDList = [
    {
      platform: '斗鱼直播',
      id : '秦博sb',
      time : '30',
      day : '30',
      gift : '30',
      account : '30'

    },{
      platform: '斗鱼直播',
      id : '秦博sb',
      time : '30',
      day : '30',
      gift : '30',
      account : '30'

    }
    ];

  this.imageList = [
    {
     url: '../images/office.jpg'
    },{
      url: '../images/screen1.jpg'
    },{
      url: '../images/yeoman.png'
    },{
      url: '../images/office.jpg'
    },{
      url: '../images/office.jpg'
    },{
      url: '../images/yeoman.png'
    },{
      url: '../images/yeoman.png'
    },{
      url: '../images/video.png'
    }
    ]

}]);
