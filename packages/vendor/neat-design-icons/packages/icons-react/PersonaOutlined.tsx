// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import PersonaOutlinedSVG from '../icons-svg/lib/PersonaOutlined'
import Icon, { type BaseIconProps } from '../components'

const PersonaOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={PersonaOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    PersonaOutlined.displayName = 'PersonaOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(PersonaOutlined)