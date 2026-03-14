import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { doorVariants, doorVariantsRight, pageVariants } from '../../animations/variants'

function DoorTransition({ children }) {
  return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: 'relative' }}
      >
        {/* Left Door with Left Half of Logo */}
        <motion.div
          variants={doorVariants}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#1a1a1a',
            zIndex: 1000,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{
            width: '200px',
            height: '200px',
            overflow: 'hidden',
            position: 'relative',
            marginLeft: 'auto',
          }}>
            <img
              src="./assets/Logo/2.svg"
              alt="Logo Left Half"
              onError={(e) => { e.target.style.display = 'none'; }}
              style={{
                width: '400px',
                height: '200px',
                objectFit: 'contain',
                position: 'absolute',
                right: '0px',
                top: '0px',
              }}
            />
          </div>
        </motion.div>

        {/* Right Door with Right Half of Logo */}
        <motion.div
          variants={doorVariantsRight}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: '#1a1a1a',
            zIndex: 1000,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{
            width: '200px',
            height: '200px',
            overflow: 'hidden',
            position: 'relative',
            marginRight: 'auto',
          }}>
            <img
              src="./assets/Logo/2.svg"
              alt="Logo Right Half"
              onError={(e) => { e.target.style.display = 'none'; }}
              style={{
                width: '400px',
                height: '200px',
                objectFit: 'contain',
                position: 'absolute',
                left: '-200px',
                top: '0px',
              }}
            />
          </div>
        </motion.div>

        {/* Page Content */}
        <motion.div variants={pageVariants} style={{ opacity: 0 }}>
          {children}
        </motion.div>
      </motion.div>
  )
}

DoorTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoorTransition
