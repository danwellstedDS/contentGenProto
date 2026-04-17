// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SearchOutlinedSVG from '../icons-svg/lib/SearchOutlined'
import Icon, { type BaseIconProps } from '../components'

const SearchOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SearchOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SearchOutlined.displayName = 'SearchOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SearchOutlined)