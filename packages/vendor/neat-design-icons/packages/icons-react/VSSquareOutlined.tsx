// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import VSSquareOutlinedSVG from '../icons-svg/lib/VSSquareOutlined'
import Icon, { type BaseIconProps } from '../components'

const VSSquareOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={VSSquareOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    VSSquareOutlined.displayName = 'VSSquareOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(VSSquareOutlined)