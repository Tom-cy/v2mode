// testUtils/register.spec.js
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import Register from '@/views/percenter/register'

describe('Register.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.exists()).toBe(true)
  })

  it('validates peoname input', () => {
    const wrapper = shallowMount(Register)
    const peonameInput = wrapper.find('[prop="peoname"] input')
    peonameInput.setValue('John Doe')
    expect(wrapper.vm.ruleForm.peoname).toBe('John Doe')
  })

  it('validates peoidcard input', () => {
    const wrapper = shallowMount(Register)
    const peoidcardInput = wrapper.find('[prop="peoidcard"] input')
    peoidcardInput.setValue('1234567890')
    expect(wrapper.vm.ruleForm.peoidcard).toBe('1234567890')
  })

  it('validates peophone input', () => {
    const wrapper = shallowMount(Register)
    const peophoneInput = wrapper.find('[prop="peophone"] input')
    peophoneInput.setValue('1234567890')
    expect(wrapper.vm.ruleForm.peophone).toBe('1234567890')
  })

  it('validates peopassword input', () => {
    const wrapper = shallowMount(Register)
    const peopasswordInput = wrapper.find('[prop="peopassword"] input')
    peopasswordInput.setValue('password123')
    expect(wrapper.vm.ruleForm.peopassword).toBe('password123')
  })

  it('validates peopasswordagain input', () => {
    const wrapper = shallowMount(Register)
    const peopasswordagainInput = wrapper.find('[prop="peopasswordagain"] input')
    peopasswordagainInput.setValue('password123')
    expect(wrapper.vm.ruleForm.peopasswordagain).toBe('password123')
  })

  it('validates verificacode input', () => {
    const wrapper = shallowMount(Register)
    const verificacodeInput = wrapper.find('[prop="verificacode"] input')
    verificacodeInput.setValue('123456')
    expect(wrapper.vm.ruleForm.verificacode).toBe('123456')
  })
})