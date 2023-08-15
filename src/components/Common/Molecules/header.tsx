import IconImage from "../Atoms/icon-image";
import Text from "../Atoms/text";

const Header = () => {

  return(
    <div>
      <IconImage 
        classValueIconContainer="level-item"
        styleValueIconContainer={{margin: '4vw 0 10vw 0'}}
        classValueIcon="fas fa-user-circle has-text-info"
        styleValueIcon={{fontSize: '12vw'}}
      />
      <Text
        classValueTextContainer="level-item"
        classValueText="has-text-dark"
        styleValueText={{fontSize: '4vw'}}
      >
        𝓽𝓲𝓹 𝓪𝓹𝓹𝓵𝓲𝓬𝓪𝓽𝓲𝓸𝓷
      </Text>
    </div>
  )
}

export default Header;