// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CategoriesOutlinedSVG from '../icons-svg/lib/CategoriesOutlined'
import Icon, { type BaseIconProps } from '../components'

const CategoriesOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CategoriesOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CategoriesOutlined.displayName = 'CategoriesOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CategoriesOutlined)