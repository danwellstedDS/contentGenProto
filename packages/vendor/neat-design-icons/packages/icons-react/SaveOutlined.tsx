// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SaveOutlinedSVG from '../icons-svg/lib/SaveOutlined'
import Icon, { type BaseIconProps } from '../components'

const SaveOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SaveOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SaveOutlined.displayName = 'SaveOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SaveOutlined)