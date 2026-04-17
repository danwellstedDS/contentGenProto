// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileXmlOutlinedSVG from '../icons-svg/lib/FileXmlOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileXmlOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileXmlOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileXmlOutlined.displayName = 'FileXmlOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileXmlOutlined)