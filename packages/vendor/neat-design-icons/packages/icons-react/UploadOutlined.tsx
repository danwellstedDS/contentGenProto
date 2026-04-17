// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import UploadOutlinedSVG from '../icons-svg/lib/UploadOutlined'
import Icon, { type BaseIconProps } from '../components'

const UploadOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={UploadOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    UploadOutlined.displayName = 'UploadOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(UploadOutlined)