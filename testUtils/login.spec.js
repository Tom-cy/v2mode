// testUtils/login.spec.js
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import Login from '@/views/percenter/login'

describe('Login.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.exists()).toBe(true)
  })

  it('validates idcard input', () => {
    const wrapper = shallowMount(Login)
    const idcardInput = wrapper.find('[prop="idcard"] input')
    idcardInput.setValue('1234567890')
    expect(wrapper.vm.ruleForm.idcard).toBe('1234567890')
  })

  it('validates password input', () => {
    const wrapper = shallowMount(Login)
    const passwordInput = wrapper.find('[prop="password"] input')
    passwordInput.setValue('password123')
    expect(wrapper.vm.ruleForm.password).toBe('password123')
  })
})