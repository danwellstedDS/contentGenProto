// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import CloudUploadOutlinedSVG from '../icons-svg/lib/CloudUploadOutlined'
import Icon, { type BaseIconProps } from '../components'

const CloudUploadOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={CloudUploadOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    CloudUploadOutlined.displayName = 'CloudUploadOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(CloudUploadOutlined)