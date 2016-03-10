'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */
export default class extends think.logic.base {
  /**
   * index action logic
   * @return {} []
   */
  async indexAction(){
    let userModel = this.model('user');
        // let rs=await this.model('user').where({id:this.post('id')}).update(data);
        //    let data={
        //         name:"hk22",
        //         age:"266"
        //    };    
        // userModel.updateUser(data,1);  //更新数据  
        //userModel.deleteUser(15);//删除某条数据
        //userModel.addUser(data);//增加一条数据
    let nameList= userModel.getAllUser(); //查询所有
    this.assign("nameList",nameList);
      // 设置分页
      let param=this.get();
      let page=param.page;
      let pagesize=param.pagesize;
      if(page){
         let userList=await userModel.page(this.get("page"), this.get("pagesize")).select(); 
         let pageData = await userModel.page(this.get("page"), this.get("pagesize")).countSelect();
         this.assign("nameList",userList);
         this.assign("pageData",pageData);
         
         //设置disable
         let nextclass='',
             nextlink='',
             preclass='',
             prelink='';
         //下一页判断
         if(pageData.currentPage===pageData.totalPages){
                nextclass='disabled';
                nextlink='javascript:void(0)';
         }else{
             var nextpage=pageData.currentPage+1;
                 nextclass='';
                 nextlink='?page='+nextpage+'&pagesize='+pageData.numsPerPage;
        }
        //上一页判断
        if(pageData.currentPage===1){
                preclass='disabled';
                prelink='javascript:void(0)';
         }else{
             var prepage=pageData.currentPage-1;
                 preclass='';
                 prelink='?page='+prepage+'&pagesize='+pageData.numsPerPage;
        }
        //页面赋值
         this.assign("nextclass",nextclass);
         this.assign("preclass",preclass);
         this.assign("nextlink",nextlink);
         this.assign("prelink",prelink);
      }
       //设置分页
  }
  __before(){
      
  }  
}