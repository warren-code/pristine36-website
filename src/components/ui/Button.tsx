import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
  size?: 'default' | 'sm' | 'lg' | 'md' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', style, ...props }, ref) => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.2s',
      cursor: 'pointer',
      outline: 'none',
      textDecoration: 'none',
      border: 'none',
      ...style,
    }

    const variantStyles: Record<string, React.CSSProperties> = {
      default: {
        backgroundColor: 'var(--primary)',
        color: 'var(--background)',
        border: '2px solid var(--primary)',
      },
      primary: {
        backgroundColor: 'var(--primary)',
        color: 'var(--background)',
        border: '2px solid var(--primary)',
      },
      secondary: {
        backgroundColor: 'var(--secondary)',
        color: 'var(--background)',
        border: '2px solid var(--secondary)',
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--primary)',
        border: '2px solid var(--primary)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--foreground)',
        border: '2px solid transparent',
      },
      glass: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'var(--foreground)',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
      },
    }

    const sizeStyles: Record<string, React.CSSProperties> = {
      default: {
        height: '2.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
      sm: {
        height: '2.25rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
      },
      md: {
        height: '2.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      },
      lg: {
        height: '2.75rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
      icon: {
        height: '2.5rem',
        width: '2.5rem',
      },
    }

    const combinedStyles = {
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
    }

    return (
      <button
        className={className}
        style={combinedStyles}
        ref={ref}
        onMouseEnter={(e) => {
          if (variant === 'default' || variant === 'primary') {
            e.currentTarget.style.backgroundColor = '#3CCF6E'
            e.currentTarget.style.transform = 'translateY(-1px)'
          } else if (variant === 'secondary') {
            e.currentTarget.style.backgroundColor = '#1BB3A1'
            e.currentTarget.style.transform = 'translateY(-1px)'
          } else if (variant === 'outline') {
            e.currentTarget.style.backgroundColor = 'var(--primary)'
            e.currentTarget.style.color = 'var(--background)'
          } else if (variant === 'ghost') {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
          } else if (variant === 'glass') {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
          }
          props.onMouseEnter?.(e)
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor as string
          e.currentTarget.style.color = variantStyles[variant].color as string
          e.currentTarget.style.transform = 'translateY(0)'
          props.onMouseLeave?.(e)
        }}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
