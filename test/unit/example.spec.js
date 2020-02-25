import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import axios from 'axios'


describe('HelloWorld.vue', () => {
  /*
    before (function (done) {
    }

    after(function (done) {
    }

    beforeEach(function(){
    })

    afterEach(function(){
    })
  
  */


  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()


  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.find('h3').text()).toMatch(msg)
  })

  
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Vue!')
  })


  // 异步-axios方式
	it('axios',function(done){
    
	  	(async()=>{
	  		let url = "https://tngdigitalhelp.zendesk.com/api/v2/help_center/en-my/articles/360037018273"
	  		let result = await axios({
          method: 'get',
          url: url,
          responseType: 'json', // 默认的
        })

        expect(result.data.article.author_id).toEqual(393005683513);
        done();
      })();
      
	});
  

})
