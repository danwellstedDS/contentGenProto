// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import BookOutlinedSVG from '../icons-svg/lib/BookOutlined'
import Icon, { type BaseIconProps } from '../components'

const BookOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={BookOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    BookOutlined.displayName = 'BookOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(BookOutlined)