import {describe, expect, it, vi} from 'vitest'
import {mount} from "@vue/test-utils";

describe('test humanReadableDate',()=> {
    it('renders a greeting', async () => {

        const scrollHeight = 1000;
        const clientHeight = 200;
        const scrollTop = 800;
        const mockElement = {
            scrollHeight,
            clientHeight,
            scrollTop,
            addEventListener: vi.fn(),
        };

        document.querySelector = vi.fn().mockReturnValue(mockElement);

        const Comp = {
            template: '<div id="infinite-list"></div>',
            setup(){
                return useScroll()
            }
        }

        const wrapper = mount(Comp)
        // await wrapper.find('#infinite-list').trigger('scroll')

        mockElement.scrollTop = scrollTop;

        // Check if loadNewData is set to true
        // expect(wrapper.vm.loadNewData).toBe(true);
    })
})