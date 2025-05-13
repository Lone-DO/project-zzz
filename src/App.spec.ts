import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Component from './App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, { props: { path: '/' } })
    expect(wrapper.html()).not.toBe(null)
  })
})
