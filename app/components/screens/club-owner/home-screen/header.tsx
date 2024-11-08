import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
 // eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/Ionicons';
import useScreenSize from '@/hooks/useScreenSize';
  

const { width } = Dimensions.get('window');

const Mysvg=()=>{
  const { isSmall } = useScreenSize();
  const lineSize = isSmall ? 30 : 36;
  return(
    <View>
    <svg width="3" height={lineSize} viewBox="0 0 1 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1" height="30" fill="url(#paint0_linear_448_25)"/>
<defs>
<linearGradient id="paint0_linear_448_25" x1="0.5" y1="0" x2="0.5" y2="29" gradientUnits="userSpaceOnUse">
<stop stopColor="#D9D9D9" stopOpacity="0"/>
<stop offset="0.5" stopColor="#3F3F3F"/>
<stop offset="1" stopColor="#737373" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>
</View>
  );
};  //my line svg icon
//DATE SECTION WHICH INCLUDES LIVE ICON CALENDER ICON AND DATE SECTION
const DateNavigator = () => {
  const { isMedium } = useScreenSize();
  const { isSmall } = useScreenSize();
  const iconSize = width>320 ? 26 : 22;
   

    return (
      <View style={styles.dateNavContainer}>
        <View style={styles.liveIndicator}>
          <Text style={styles.liveText}>LIVE</Text>
        </View>
    <View style={[styles.datesection, isSmall&& styles.smalldatesection]}>
    <TouchableOpacity style={styles.arrowback}>
    <svg width="15" height="15" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.42853 12.5587C7.43024 12.6171 7.41999 12.6752 7.39839 12.7296C7.3768 12.7839 7.34432 12.8332 7.30295 12.8745C7.22258 12.9549 7.11359 13 6.99995 13C6.8863 13 6.77731 12.9549 6.69694 12.8745L1.12543 7.30301C1.04509 7.22264 0.99995 7.11365 0.99995 7C0.99995 6.88636 1.04509 6.77737 1.12543 6.697L6.69694 1.12549C6.77731 1.04514 6.8863 1 6.99995 1C7.11359 1 7.22258 1.04514 7.30295 1.12549C7.3833 1.20586 7.42843 1.31485 7.42843 1.42849C7.42843 1.54213 7.3833 1.65112 7.30295 1.73149L2.03445 7L7.30295 12.2685C7.38036 12.3458 7.42528 12.4493 7.42853 12.5587Z" fill="white" fillOpacity="0.6"/>
        <path d="M7.60345 12.5535L7.60345 12.5535C7.59888 12.3993 7.53551 12.2535 7.4267 12.1448C7.42667 12.1447 7.42663 12.1447 7.4266 12.1447L2.28193 7L7.4267 1.85524L7.42671 1.85522C7.53987 1.74203 7.60343 1.58854 7.60343 1.42849C7.60343 1.26844 7.53987 1.11495 7.42671 1.00176L7.42668 1.00172C7.31349 0.888569 7.16 0.825004 6.99995 0.825004C6.8399 0.825004 6.68641 0.888569 6.57322 1.00172L6.5732 1.00174L1.00169 6.57325L1.00167 6.57327C0.888515 6.68646 0.82495 6.83996 0.82495 7C0.82495 7.16005 0.888515 7.31354 1.00167 7.42673L1.00169 7.42675L6.5732 12.9983L6.57322 12.9983C6.68641 13.1114 6.8399 13.175 6.99995 13.175C7.15996 13.175 7.31342 13.1115 7.4266 12.9984L7.60345 12.5535ZM7.60345 12.5535C7.60587 12.6358 7.59143 12.7177 7.56101 12.7942M7.60345 12.5535L7.56101 12.7942M7.56101 12.7942C7.53061 12.8707 7.4849 12.9401 7.42668 12.9983L7.56101 12.7942Z" stroke="white" strokeOpacity="0.6" strokeWidth="0.75"/>
        <path d="M11.4183 11.9373C11.3879 12.0138 11.3422 12.0832 11.284 12.1413L11.2839 11.2877L11.1603 11.4116L11.284 11.2878L11.2839 11.2878C11.3928 11.3965 11.4561 11.5428 11.4607 11.6966L11.4608 11.6966C11.4632 11.7789 11.4487 11.8608 11.4183 11.9373ZM11.284 2.71262L6.99639 7.00022L11.2839 12.1414C11.1707 12.2545 11.0173 12.3181 10.8572 12.3181C10.6972 12.3181 10.5437 12.2545 10.4305 12.1413L10.4305 12.1413L5.71614 7.42697L5.71613 7.42695C5.60297 7.31377 5.53941 7.16027 5.53941 7.00022C5.53941 6.84018 5.60297 6.68668 5.71612 6.57349L5.71614 6.57347L10.4305 1.85912L10.4305 1.8591C10.5437 1.74595 10.6972 1.68238 10.8572 1.68238C11.0173 1.68238 11.1708 1.74595 11.284 1.8591L11.284 1.85914C11.3972 1.97232 11.4607 2.12582 11.4607 2.28587C11.4607 2.44591 11.3972 2.59941 11.284 2.7126L11.284 2.71262Z" fill="white" stroke="white" strokeWidth="0.75"/>
    </svg>

         </TouchableOpacity>
        
        <View style={[styles.dateItems, isMedium && styles.mediumdateItems]}>
           
          
          <Text style={[styles.dateText, isSmall&& styles.smalldateText]} >September</Text> 
          <View style={styles.dateline}><Mysvg /></View>
           <Text style={[styles.dateTextActive, isSmall&& styles.smalldateTextActive]}>Octuber</Text>
          
         
          <View style={styles.dateline}><Mysvg/></View>
          
          <Text style={[styles.dateText, isSmall&& styles.smalldateText]} >November</Text>
           
        </View>
         
        <TouchableOpacity style={styles.arrowforward}>
        <svg width="15" height="15" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.85748 12.5587C4.85577 12.6171 4.86602 12.6752 4.88762 12.7296C4.90921 12.7839 4.94169 12.8332 4.98306 12.8745C5.06343 12.9549 5.17242 13 5.28606 13C5.39971 13 5.5087 12.9549 5.58907 12.8745L11.1606 7.30301C11.2409 7.22264 11.2861 7.11365 11.2861 7C11.2861 6.88636 11.2409 6.77737 11.1606 6.697L5.58907 1.12549C5.5087 1.04514 5.39971 1 5.28606 1C5.17242 1 5.06343 1.04514 4.98306 1.12549C4.90271 1.20586 4.85758 1.31485 4.85758 1.42849C4.85758 1.54213 4.90271 1.65112 4.98306 1.73149L10.2516 7L4.98306 12.2685C4.90565 12.3458 4.86073 12.4493 4.85748 12.5587Z" fill="white" fillOpacity="0.6"/>
<path d="M4.68256 12.5535L4.68256 12.5535C4.68713 12.3993 4.7505 12.2535 4.85931 12.1448C4.85934 12.1447 4.85938 12.1447 4.85941 12.1447L10.0041 7L4.85931 1.85524L4.8593 1.85522C4.74614 1.74203 4.68258 1.58854 4.68258 1.42849C4.68258 1.26844 4.74614 1.11495 4.8593 1.00176L4.85933 1.00172C4.97252 0.888569 5.12602 0.825004 5.28606 0.825004C5.44611 0.825004 5.5996 0.888569 5.71279 1.00172L5.71281 1.00174L11.2843 6.57325L11.2843 6.57327C11.3975 6.68646 11.4611 6.83996 11.4611 7C11.4611 7.16005 11.3975 7.31354 11.2843 7.42673L11.2843 7.42675L5.71281 12.9983L5.71279 12.9983C5.5996 13.1114 5.44611 13.175 5.28606 13.175C5.12605 13.175 4.97259 13.1115 4.85941 12.9984L4.68256 12.5535ZM4.68256 12.5535C4.68014 12.6358 4.69459 12.7177 4.725 12.7942M4.68256 12.5535L4.725 12.7942M4.725 12.7942C4.7554 12.8707 4.80111 12.9401 4.85933 12.9983L4.725 12.7942Z" stroke="white" strokeOpacity="0.6" strokeWidth="0.75"/>
<path d="M0.867699 11.9373C0.898099 12.0138 0.943813 12.0832 1.00203 12.1413L1.00211 11.2877L1.12576 11.4116L1.00201 11.2878L1.00208 11.2878C0.893175 11.3965 0.829932 11.5428 0.825273 11.6966L0.82526 11.6966C0.822843 11.7789 0.837286 11.8608 0.867699 11.9373ZM1.00201 2.71262L5.28962 7.00022L1.00211 12.1414C1.11529 12.2545 1.26875 12.3181 1.42876 12.3181C1.58881 12.3181 1.7423 12.2545 1.85549 12.1413L1.85551 12.1413L6.56987 7.42697L6.56989 7.42695C6.68304 7.31377 6.74661 7.16027 6.74661 7.00022C6.74661 6.84018 6.68304 6.68668 6.56989 6.57349L6.56987 6.57347L1.85551 1.85912L1.85549 1.8591C1.7423 1.74595 1.58881 1.68238 1.42876 1.68238C1.26872 1.68238 1.11522 1.74595 1.00203 1.8591L1.002 1.85914C0.888842 1.97232 0.825276 2.12582 0.825276 2.28587C0.825276 2.44591 0.888842 2.59941 1.002 2.7126L1.00201 2.71262Z" fill="white" stroke="white" strokeWidth="0.75"/>
</svg>

         </TouchableOpacity>
         </View>
    
        <TouchableOpacity>
        <svg width={iconSize} height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H6C5.20435 4 4.44129 4.31607 3.87868 4.87868C3.31607 5.44129 3 6.20435 3 7V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H18C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19V7C21 6.20435 20.6839 5.44129 20.1213 4.87868C19.5587 4.31607 18.7956 4 18 4ZM8 17C7.80222 17 7.60888 16.9414 7.44443 16.8315C7.27998 16.7216 7.15181 16.5654 7.07612 16.3827C7.00043 16.2 6.98063 15.9989 7.01921 15.8049C7.0578 15.6109 7.15304 15.4327 7.29289 15.2929C7.43275 15.153 7.61093 15.0578 7.80491 15.0192C7.99889 14.9806 8.19996 15.0004 8.38268 15.0761C8.56541 15.1518 8.72159 15.28 8.83147 15.4444C8.94135 15.6089 9 15.8022 9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17ZM16 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15H16C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17ZM19 11H5V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7V11Z" fill="white" fillOpacity="0.8"/>
</svg>

        </TouchableOpacity>
      </View>
      
    );
  };


  //HEARER FUNCTION WHICH IS THE MAIN FUNCTION IN WHICH I AM ADDING MY DATE SECTION AND ALSO THE SECTION ABOVE IT 
const Header = () => {
  const { isSmall } = useScreenSize();
  const iconSize = width>375 ? 24 : 18;

  return (
    <View>
    <View style={[styles.headerContainer, isSmall && styles.smallHeaderContainer]}>
    <svg width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4315 2.7748L20.4317 2.77097V2.76713V1.72034C20.4317 1.66938 20.4267 1.61854 20.4167 1.56857L20.4082 1.52574C20.378 1.37485 20.2956 1.23944 20.1754 1.14331C20.0594 1.05054 19.9153 1 19.7669 1H19.6527C19.5233 1 19.3953 1.02561 19.2759 1.07535L18.7313 1.30228L18.7281 1.30366L17.0331 2.06346L17.0321 2.06392L15.631 2.70613L15.6294 2.70683L12.0657 4.28419L12.0642 4.28489L10.6624 4.92737L10.6615 4.92781L8.96832 5.6868L8.96749 5.68717L7.50714 6.32969L7.50431 6.331L5.63403 7.20769L5.62849 7.21027L5.62324 7.21338L4.62964 7.79783L4.62465 7.80078L4.61995 7.80413L3.88967 8.32577C3.82527 8.37178 3.76476 8.42301 3.7088 8.47897L3.14234 9.04545L3.13773 9.05004L3.1336 9.05509L2.60759 9.698L2.60354 9.70294L2.6 9.70827L2.13243 10.4096L2.12791 10.4164L2.12428 10.4237L1.52842 11.6154C1.49397 11.6843 1.46511 11.7558 1.44213 11.8294L1.18129 12.6641L1.17879 12.6721L1.17733 12.6804L1.02186 13.5613C1.00732 13.6438 1 13.7273 1 13.811V15.4376C1 15.5322 1.00935 15.6266 1.0279 15.7194L1.23632 16.7615L1.23792 16.7695L1.24049 16.7772L1.55698 17.7267C1.58201 17.8017 1.6132 17.8746 1.65023 17.9446L2.12567 18.8426L2.12957 18.85L2.13439 18.8568L2.77129 19.7591C2.81848 19.8259 2.87129 19.8887 2.92915 19.9465L3.66836 20.6857L3.67387 20.6912L3.68001 20.6961L4.41251 21.2716C4.47529 21.3209 4.5421 21.3649 4.61219 21.4032L5.15933 21.7016L5.1614 21.7027L5.16346 21.7038L6.09862 22.1713L6.10321 22.1736L6.10797 22.1756L8.26963 23.0519L8.27049 23.0523L9.96456 23.7533L9.966 23.7539L11.7184 24.4548L11.7194 24.4552L17.7553 26.9271C17.8053 26.9476 17.8507 26.9777 17.8888 27.0158L17.92 27.0472C17.9763 27.1034 18.008 27.1799 18.008 27.2593V27.3132C18.008 27.38 17.9745 27.4425 17.9189 27.4796C17.9076 27.4871 17.8956 27.4934 17.883 27.4986L15.4595 28.4794L15.4593 28.4796L13.589 29.2394L13.5863 29.2404L10.0815 30.7593L10.0795 30.7601L8.38808 31.46L6.11014 32.336L6.10982 32.3363L3.24592 33.4466L3.24539 33.4468L1.60888 34.0898L1.65665 34.2115L1.60359 34.0921C1.23655 34.2552 1 34.6191 1 35.0209V36.5908C1 36.6548 1.0103 36.7183 1.03051 36.7789C1.0597 36.8664 1.10888 36.9461 1.17416 37.0114L1.18158 37.0187C1.30142 37.1386 1.46397 37.206 1.63346 37.206H1.78707C1.90994 37.206 2.03177 37.1836 2.14659 37.1397L3.22276 36.7298L3.22438 36.7292L6.32204 35.5019L6.32342 35.5013L15.031 31.9363L15.032 31.936L16.7844 31.2351L16.785 31.2348L18.6553 30.4748L18.66 30.473L18.6646 30.4707L19.4759 30.0652C19.5665 30.0197 19.652 29.9651 19.731 29.9019L20.0658 29.6341C20.1691 29.5513 20.2605 29.4549 20.3375 29.3473L20.4647 29.1691C20.5083 29.108 20.5471 29.0434 20.5807 28.9763L20.9108 28.3161C20.9776 28.1826 21.0231 28.0394 21.0458 27.8921L21.1064 27.4984C21.1248 27.3787 21.128 27.2572 21.116 27.1368L21.0865 26.8423C21.0774 26.7508 21.0595 26.6604 21.033 26.5724L20.9262 26.2162C20.9025 26.1372 20.872 26.0603 20.8351 25.9865L20.6682 25.6528C20.6135 25.5433 20.545 25.4413 20.4644 25.3492L20.1656 25.0077L20.1605 25.0019L20.1547 24.9966L19.6868 24.5755C19.6016 24.4989 19.5076 24.4327 19.4068 24.3784L18.785 24.0436L18.7785 24.0401L18.7716 24.0373L15.8502 22.8688L15.8492 22.8684L13.2785 21.8167L13.278 21.8165L7.78641 19.5965L6.71016 19.1122C6.656 19.0878 6.60377 19.0594 6.55393 19.0271L5.79676 18.5372C5.70527 18.478 5.62246 18.4064 5.55069 18.3243L5.26498 17.9978L4.8126 17.3946C4.77027 17.3382 4.73312 17.2781 4.70159 17.215L4.34717 16.5062C4.31097 16.4338 4.28236 16.3579 4.26177 16.2796L4.04694 15.4633C4.02126 15.3657 4.00825 15.2651 4.00825 15.1642V14.0912C4.00825 13.9951 4.02003 13.8994 4.04334 13.8061L4.21156 13.1333C4.22747 13.0696 4.24871 13.0074 4.27502 12.9472L4.63656 12.1208L5.01899 11.4994C5.06703 11.4213 5.12406 11.3491 5.18891 11.2843L5.65981 10.8133L6.15912 10.4139C6.20675 10.3758 6.2573 10.3415 6.31026 10.3112L7.03416 9.89755L8.48905 9.25737L8.4895 9.25719L10.5936 8.32204L10.5943 8.3217L14.8609 6.39297L14.8614 6.39273L16.9071 5.45758L16.9078 5.45726L18.5443 4.69746L19.5921 4.2085C20.0704 3.98529 20.3878 3.51775 20.4188 2.99079L20.4315 2.7748Z" fill="white" stroke="white"/>
<path d="M27.1222 8.21033L27.1229 8.21002L29.1531 7.36408C29.2587 7.32011 29.3449 7.2397 29.3958 7.1375C29.429 7.07137 29.4463 6.99846 29.4463 6.92455V5.23641C29.4463 5.17345 29.441 5.11059 29.4306 5.04849L29.4173 4.9686C29.387 4.78559 29.3 4.61669 29.1688 4.48552L29.1639 4.48066C29.0818 4.39862 28.9841 4.33409 28.8762 4.29101C28.709 4.22413 28.5251 4.21164 28.3503 4.2553L28.3033 4.26706L28.2871 4.27113L28.2714 4.27722L26.9273 4.80323L26.9254 4.80396L24.2953 5.856L24.293 5.85694L24.2906 5.85793L22.785 6.49439L20.9189 7.24082L20.9177 7.24134L18.7439 8.12443L18.7434 8.12464L16.112 9.18781L16.1115 9.18799L14.2426 9.94722L12.6075 10.5896L12.605 10.5906L12.6026 10.5916L11.1999 11.176L11.1848 11.1823L11.1707 11.1904L10.7065 11.4556L10.6892 11.4655C10.529 11.557 10.4241 11.617 10.3289 11.693C10.2337 11.7691 10.152 11.8582 10.0274 11.9941L10.0139 12.0089L9.89382 12.1399L9.8817 12.1531C9.76981 12.2751 9.69652 12.3551 9.63445 12.4453C9.57238 12.5354 9.52391 12.6324 9.44988 12.7805L9.44185 12.7966L9.38307 12.9142L9.37678 12.9267C9.31867 13.0429 9.28064 13.119 9.2508 13.1996C9.22099 13.2802 9.20038 13.3627 9.16887 13.4887L9.16548 13.5024L9.13768 13.6135L9.13386 13.6288C9.09854 13.77 9.07539 13.8625 9.06364 13.9582C9.05186 14.0538 9.05188 14.1491 9.05188 14.2947V14.3105V14.5237V14.5401C9.05186 14.6912 9.05186 14.7901 9.06453 14.8892C9.06531 14.8955 9.06617 14.9019 9.06706 14.9082C9.08091 15.0071 9.10695 15.1026 9.14674 15.2483L9.15105 15.2641L9.15513 15.2791C9.19285 15.4175 9.21757 15.5082 9.25339 15.5961C9.25566 15.6017 9.25798 15.6072 9.26031 15.6128C9.29715 15.7002 9.34375 15.7818 9.41495 15.9064L9.42265 15.9199L9.55563 16.1526L9.56415 16.1675C9.64268 16.305 9.69415 16.395 9.75771 16.4782C9.82127 16.5614 9.89461 16.6348 10.0066 16.7467L10.0187 16.7589L10.0492 16.7893L10.0556 16.7957C10.1151 16.8552 10.1541 16.8942 10.1962 16.9307C10.2383 16.9673 10.2824 17.0003 10.3497 17.0508L10.3569 17.0563L10.5251 17.1824L10.5325 17.1879C10.6009 17.2392 10.6457 17.2728 10.6933 17.3034C10.7409 17.3341 10.7901 17.3609 10.8652 17.4018L10.8733 17.4062L11.3506 17.6666L11.3635 17.6736L11.3771 17.6792L12.9552 18.3221L12.9556 18.3222L17.2806 20.0756L19.4431 20.9523L19.4443 20.9528L21.1964 21.6536L21.1977 21.6542L23.0541 22.4083L23.7414 22.7749C23.8333 22.8239 23.8674 22.8423 23.8994 22.8626C23.9313 22.883 23.9624 22.906 24.0457 22.9685L24.3824 23.2211C24.4881 23.3003 24.5272 23.33 24.5626 23.3624C24.598 23.3947 24.631 23.431 24.7193 23.5292L24.9481 23.7834C25.0138 23.8564 25.0381 23.8836 25.06 23.9118C25.0819 23.94 25.1023 23.9703 25.1568 24.052L25.3917 24.4044C25.4578 24.5036 25.4822 24.5406 25.503 24.5785C25.5237 24.6165 25.5417 24.657 25.5895 24.7662L25.8112 25.2731C25.8606 25.3859 25.8787 25.4279 25.8928 25.4703C25.9069 25.5127 25.9177 25.5571 25.9459 25.677L26.0558 26.1442C26.0918 26.2972 26.1048 26.354 26.1113 26.4107C26.1179 26.4673 26.1183 26.5256 26.1183 26.6828V27.4171C26.1183 27.5759 26.1179 27.635 26.1112 27.6924C26.1044 27.7497 26.0912 27.8071 26.0544 27.9618L25.903 28.5972C25.8668 28.7492 25.853 28.8056 25.8336 28.8589C25.8142 28.9122 25.7886 28.9645 25.7188 29.1043L25.5677 29.4063L25.2011 29.9766C25.1224 30.0988 25.0929 30.144 25.0598 30.1853C25.0267 30.2263 24.9887 30.2647 24.8859 30.3677L24.5943 30.6592C24.515 30.7384 24.4855 30.7677 24.4544 30.794C24.4233 30.8204 24.3896 30.8447 24.2984 30.91L23.8563 31.2256C23.7525 31.2998 23.7138 31.3273 23.6737 31.3505C23.6337 31.3738 23.5908 31.3939 23.475 31.4472L22.1809 32.0444L20.7219 32.6866L20.7203 32.6871L19.0253 33.4471L19.0241 33.4476L17.0966 34.3236L17.0953 34.3244L15.4016 35.0836H15.4013L14.2323 35.6097L14.2314 35.61L12.3027 36.4867L12.3004 36.4878L12.2982 36.4888L10.3054 37.4414C9.93972 37.5725 9.6948 37.9195 9.6948 38.3092V40.1114C9.6948 40.1924 9.71366 40.2723 9.7499 40.3449C9.7905 40.4259 9.8516 40.4951 9.92713 40.5456L10.0482 40.6263C10.2033 40.7298 10.3855 40.7849 10.5719 40.7849C10.7032 40.7849 10.8329 40.7574 10.953 40.7047L12.8085 39.8859L12.8106 39.8851L14.6224 39.0669L14.6254 39.0653L15.4985 38.658L15.5021 38.6562L17.1934 37.898L17.1952 37.8972L17.197 37.8965L18.0707 37.4889L20.3471 36.4964V36.4967L20.3503 36.4951L22.8051 35.3845L22.8055 35.3843L24.7343 34.5077L24.7453 34.5028L24.7558 34.4968L25.574 34.0291L25.5849 34.0229L25.5951 34.0158L26.406 33.4431L26.4151 33.4369C26.4978 33.3786 26.5519 33.3402 26.6032 33.2971C26.6545 33.2537 26.7015 33.207 26.7731 33.1354L26.7808 33.1276L27.3241 32.5844L27.3361 32.5724L27.3463 32.5588L27.931 31.7991L27.9386 31.7889L27.9454 31.7782L28.4232 31.0138L28.4284 31.0051C28.4768 30.9281 28.5084 30.8774 28.5363 30.8238C28.5643 30.7703 28.5878 30.7154 28.6238 30.6315L28.6278 30.6227L28.8992 29.9894L28.9052 29.975L28.9097 29.9601L29.2017 28.9666L29.2059 28.9525L29.2085 28.9381L29.3441 28.1698L29.3459 28.1588C29.364 28.0569 29.3757 27.99 29.3817 27.9216C29.3877 27.8531 29.3877 27.7852 29.3877 27.6815V27.6705V26.2576V26.2465C29.3877 26.1428 29.3877 26.0749 29.3817 26.0065C29.3757 25.9381 29.364 25.8713 29.3459 25.7692L29.3441 25.7582L29.242 25.1794L29.2404 25.1702C29.2252 25.0842 29.2153 25.028 29.2009 24.972C29.1868 24.9159 29.1688 24.8618 29.1411 24.779L29.1382 24.7701L28.9068 24.076L28.9021 24.0617L28.8958 24.0481L28.4867 23.1714L28.4804 23.1581L28.4728 23.1456L27.9558 22.2996L27.9495 22.2895C27.8926 22.1962 27.8552 22.1351 27.8119 22.077C27.7688 22.0189 27.7207 21.9657 27.6475 21.8844L27.6397 21.8756L27.275 21.4706L27.2705 21.4655L27.2656 21.4606L26.9734 21.1684L26.9686 21.1635L26.9634 21.1589L26.379 20.6329L26.3703 20.6251L26.361 20.6181L25.6596 20.0921L25.6466 20.0823L25.6325 20.0743L24.8142 19.6067L24.8012 19.5993L24.7875 19.5934L23.151 18.8921L23.1486 18.891L23.1463 18.8901L14.4985 15.3842L14.4962 15.3833L12.4684 14.5384C12.451 14.5311 12.4353 14.5206 12.422 14.5073L12.4194 14.5047C12.3941 14.4794 12.3798 14.445 12.3798 14.4092C12.3798 14.358 12.4087 14.3112 12.4545 14.2883L13.0447 13.9932L14.6119 13.3547L14.6135 13.3541L17.5342 12.1858L17.5365 12.1849L17.5388 12.1839L20.1671 11.0742L20.1689 11.0734L22.8544 9.9642L22.8556 9.96373L24.4325 9.32131L24.4337 9.32081L27.1222 8.21033Z" fill="#B50000" stroke="#B50000"/>
</svg>

      < View style={styles.logoborder}><Mysvg /></View>
      <Text style={[styles.headerTitle, isSmall && styles.smallHeaderTitle]}>Overview</Text>
      <View style={styles.headerIcons}>
        <Icon name="search-outline" size={iconSize}  color="#fff" style={[styles.icon, isSmall && styles.smallIcon]} />
        <Icon name="notifications-outline" size={iconSize} color="#fff" style={[styles.icon, isSmall && styles.smallIcon]} />
      </View>
      
    </View>
    <DateNavigator/>
    </View>
  );
};
//THSI IS MY STYLE ARE WERE I AM ADDING MY STYLES CSS 
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingRight:width>375?15:3,
  },
  smallHeaderContainer: {
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  smallLogo: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: width> 375? 32:24,
    fontWeight: 'bold',
    textAlign:'center',
  },
  smallHeaderTitle: {
    fontSize: 16,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight:width> 375? 10:6,
    padding: width> 375? 12:10,
    borderRadius: 100,
    borderColor:  '#353535',
   borderWidth:1,
},
  smallIcon: {
    marginRight: 4,
    padding: 8,
  },
  datesection:{
    flexDirection:'row',
    justifyContent:'space-between',
    
    paddingTop:width> 340? 20:13,
    borderWidth: 2,                
    borderColor: '#353535',            
    borderRadius:width>320? 20:17,             
    borderStyle: 'solid',  
  },
  smalldatesection:{
    paddingTop:5,
  },

  dateNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(26, 26, 26, 0.8)',  // Optional: Semi-transparent background for readability
    borderTopWidth: 2,               // Sets the width of the border
    borderTopColor: '#353535',           // Sets the color of the border
                   
    borderStyle: 'solid', 
  },
  dateItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:20,
   
  },
  mediumdateItems:{
    gap:width> 375? 10:7,
  },
  liveIndicator: {
    backgroundColor: '#00FF29',
    paddingHorizontal: 1,
    paddingVertical: 1,
    borderRadius: 5,
    marginRight: width> 375? 10:5,
  },
  liveText: {
    color: '#fff',
    fontSize: width> 375? 9:7,
    backgroundColor: '#00FF29',
    fontWeight: 'bold',
    borderColor:'black',
    borderWidth: width> 375? 3:2,     
    paddingHorizontal:width> 375? 7:4,     
    paddingVertical:width> 375? 2:1,      
     borderRadius: 5,              
    borderStyle: 'solid', 
  },
  dateText: {
    color: '#fff',
    paddingBottom:width>340?20:13,
    fontSize:width> 410? 14:12,
  },
  smalldateText:{
    fontSize:10,
    paddingBottom:8,
  },
  dateTextActive: {
    color: '#fff',
    
    paddingBottom:width>340?20:13,
    fontSize:width> 410? 14:12,
    fontWeight: 'bold',
    
    
    zIndex:10,
    
  },
  smalldateTextActive:{
   fontSize:10,
   paddingBottom:8,
  },
  arrowforward:{
     marginHorizontal:width> 350? 10:5,
     
     marginTop:width> 340? 8:10,
  },
  arrowback:{
    marginHorizontal:width> 350? 10:5,
    marginTop:width> 340? 6:10,
  },
  logoborder:{
    position:'absolute',
    left:70,
  },
  dateline:{
    paddingBottom:width> 320? 11:8,
    
  }
});

export default Header;


 
