// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MoveRowOutlinedSVG from '../icons-svg/lib/MoveRowOutlined'
import Icon, { type BaseIconProps } from '../components'

const MoveRowOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MoveRowOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MoveRowOutlined.displayName = 'MoveRowOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MoveRowOutlined)