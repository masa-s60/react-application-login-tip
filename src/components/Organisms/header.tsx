import IconImage from "../Common/Atoms/icon-image";
import Text from "../Common/Atoms/text";

const Header = () => {

  return(
    <div>
      <IconImage 
        classValueIconContainer="level-item"
        styleValueIconContainer={{margin: '4vw 0 10vw 0'}}
        classValueIcon="fas fa-user-circle has-text-info"
        styleValueIcon={{fontSize: '12vw'}}
      />
      <Text classValueTextContainer="level-item">
        <p className="has-text-dark" style={{fontSize: '4vw'}}>
          𝓽𝓲𝓹 𝓪𝓹𝓹𝓵𝓲𝓬𝓪𝓽𝓲𝓸𝓷
        </p>
      </Text>
    </div>
  )
}

export default Header;