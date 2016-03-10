'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    this.assign("tt","123");  
    let pagesize=this.config("pagesize")
    if(!this.get("page")){
        return this.redirect("index/index?page=1&pagesize="+pagesize);
    }
    return this.display();
  }
  async getalluserAction(){
      //let id =this.post('id');
      let userModel=this.model('user');
      let userList=await userModel.getAllUser();
      console.log(userList);
      return this.success(userList);
  }
  //删除数据接口
  async deluserAction(){
      let param=this.get();
      console.log(param);
      let id=param.id;
      let userModel=this.model('user');
      let userList=await userModel.deleteUser(id); 
      return this.success(userList);    
  }
  //分页接口
  async getpageAction(){
      let param=this.get();
      console.log(param.id);
      let id=param.id;
      let userModel=this.model('user');
      let userList=await userModel.getUserListByPage(id,2);
      return this.success(userList);
  }
}