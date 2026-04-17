// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FullscreenExitOutlinedSVG from '../icons-svg/lib/FullscreenExitOutlined'
import Icon, { type BaseIconProps } from '../components'

const FullscreenExitOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FullscreenExitOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FullscreenExitOutlined.displayName = 'FullscreenExitOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FullscreenExitOutlined)