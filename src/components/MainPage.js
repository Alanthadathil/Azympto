import React from "react";
import styled from "styled-components";

function MainPage() {
    return (
        <>
            <Container>
                <Header>
                    <NavLeft>
                        <LogoDiv>
                            <Logo
                                img
                                src={
                                    require("../assets/images/Logo.svg").default
                                }
                                alt=""
                            />
                        </LogoDiv>
                    </NavLeft>
                    <NavRight>
                        <SearchBtn>
                            <img
                                src={
                                    require("../assets/images/Search.svg")
                                        .default
                                }
                                alt=""
                            />
                        </SearchBtn>
                        <CartBtn>
                            <img
                                src={
                                    require("../assets/images/cart.svg").default
                                }
                                alt=""
                            />
                        </CartBtn>
                        <LoginBtnDiv>
                            <LoginBtn
                                src={
                                    require("../assets/images/Profile.svg")
                                        .default
                                }
                                alt=""
                            />
                        </LoginBtnDiv>
                    </NavRight>
                </Header>
                <MainSection>
                    <HeroSection>
                        <HeroLeftDiv>
                            <Heading>
                                We Offer the Best Products for your Skin
                            </Heading>
                            <ShopBtn>Shop Now</ShopBtn>
                        </HeroLeftDiv>
                        <HeroRightDiv>
                            <HeroImgDiv>
                                <HeroImg
                                    src={
                                        require("../assets/images/Hero.svg")
                                            .default
                                    }
                                    alt=""
                                ></HeroImg>
                            </HeroImgDiv>
                        </HeroRightDiv>
                    </HeroSection>
                </MainSection>
                <CategorySection>
                    <SubHeading>Browse by Category</SubHeading>
                    <CategoryList>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/onsale.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>On Sale</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/Featured.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Featured</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/masks.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Masks</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/eyecare.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Eye Care</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/moistraizers.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Moisturizers</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/treatments.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Treatments</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/nightcare.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Night Care</ItemName>
                        </ListItem>
                        <ListItem>
                            <ItemDiv>
                                <ItemIcon
                                    src={
                                        require("../assets/images/Suncare.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </ItemDiv>
                            <ItemName>Sun Care</ItemName>
                        </ListItem>
                    </CategoryList>
                </CategorySection>
                <ProductSection>
                    <SubHeading>New Arrivals</SubHeading>
                    <ProductList>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/suncream.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Sun Cream</ProductName>
                            <ProductDetails>
                                <ProductType>SUN CARE</ProductType>
                                <OgPrice>$30</OgPrice>
                                <Price>$20</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/nightcream.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Night Eye Cream</ProductName>
                            <ProductDetails>
                                <ProductType2>EYE CARE</ProductType2>
                                <OgPrice>$100</OgPrice>
                                <Price>$50</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/skingel.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Acne Skin Gel</ProductName>
                            <ProductDetails>
                                <ProductType3>TREATMENTS</ProductType3>
                                <Price>$25</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/dryskin.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Dry Skin Rescue</ProductName>
                            <ProductDetails>
                                <ProductType4>MOISTURIZERS</ProductType4>
                                <Price>$59</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/bodyprotection.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Body Protection</ProductName>
                            <ProductDetails>
                                <ProductType5>TREATMENTS</ProductType5>
                                <Price>$32</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/onegel.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>All In One Gel</ProductName>
                            <ProductDetails>
                                <ProductType6>FEATURED</ProductType6>
                                <Price>$79</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/deeptreatment.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Deep Treatment</ProductName>
                            <ProductDetails>
                                <ProductType7>ON SALE</ProductType7>
                                <OgPrice>$22</OgPrice>
                                <Price>$17</Price>
                            </ProductDetails>
                        </ProductItem>
                        <ProductItem>
                            <Product>
                                <ProductDiv>
                                    <ProductImg
                                        src={
                                            require("../assets/images/morningshine.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </ProductDiv>
                            </Product>
                            <ProductName>Morning Shine</ProductName>
                            <ProductDetails>
                                <ProductType8>NIGHT CARE</ProductType8>
                                <Price>$14</Price>
                            </ProductDetails>
                        </ProductItem>
                    </ProductList>
                    <ViewBtn>View All</ViewBtn>
                </ProductSection>
                <ContactSection>
                    <ContactHeading>Why People Choose Us</ContactHeading>
                    <ContactList>
                        <ContactItem>
                            <IconBg>
                                <Icon
                                    src={
                                        require("../assets/images/Returns.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </IconBg>
                            <ContactName>Easy Returns</ContactName>
                            <ContactDisc>
                                Our return policy is simple and that is why
                                customers love our shop.
                            </ContactDisc>
                        </ContactItem>
                        <ContactItem>
                            <IconBg>
                                <Icon
                                    src={
                                        require("../assets/images/customer.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </IconBg>
                            <ContactName>Customer Service</ContactName>
                            <ContactDisc>
                                We offer amazing customer service no matter what
                                happens.
                            </ContactDisc>
                        </ContactItem>
                        <ContactItem>
                            <IconBg>
                                <Icon
                                    src={
                                        require("../assets/images/quality.svg")
                                            .default
                                    }
                                    alt=""
                                />
                            </IconBg>
                            <ContactName>High Quality</ContactName>
                            <ContactDisc>
                                All of our products go through very strict
                                inspection before we dispatch them.
                            </ContactDisc>
                        </ContactItem>
                    </ContactList>
                </ContactSection>
                <FooterSection>
                    <FooterLogo>
                        <FLogoDiv>
                            <FLogo
                                src={
                                    require("../assets/images/Logo.svg").default
                                }
                                alt=""
                            />
                        </FLogoDiv>
                    </FooterLogo>
                    <FooterDetails>
                        <LeftSection>
                            <Copyright>© 2020 - All rights reserved</Copyright>
                            <MediaList>
                                <MediaItems>
                                    <MediaIcon
                                        src={
                                            require("../assets/images/Instagram.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </MediaItems>
                                <MediaItems>
                                    <MediaIcon
                                        src={
                                            require("../assets/images/twitter.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </MediaItems>
                                <MediaItems>
                                    <MediaIcon
                                        src={
                                            require("../assets/images/Facebook.svg")
                                                .default
                                        }
                                        alt=""
                                    />
                                </MediaItems>
                            </MediaList>
                        </LeftSection>
                        <RightSection>
                            <LegalList>
                                <LegalHeading>Legal</LegalHeading>
                                <LegalItems>Terms of Service</LegalItems>
                                <LegalItems>Privacy Policy</LegalItems>
                            </LegalList>
                            <CompanyList>
                                <CompanHeading>Company</CompanHeading>
                                <CompanItems>About</CompanItems>
                                <CompanItems>Team</CompanItems>
                                <CompanItems>Contact</CompanItems>
                            </CompanyList>
                        </RightSection>
                    </FooterDetails>
                </FooterSection>
            </Container>
        </>
    );
}

export default MainPage;

const Container = styled.section`
    width: 85%;
    margin: 0 auto;
    max-width: 1440px;
`;
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;
const NavLeft = styled.nav``;
const LogoDiv = styled.h1`
    width: 150px;
    @media all and (max-width: 1280px) {
        width: 134px;
    }
`;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
const NavRight = styled.nav`
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const SearchBtn = styled.span`
    display: inline-block;
    margin-right: 18px;
`;
const CartBtn = styled.span`
    display: inline-block;
    margin-right: 18px;
`;
const LoginBtn = styled.img`
    display: inline-block;
    width: 100%;
`;
const LoginBtnDiv = styled.span`
    width: 20px;
    display: inline-block;
`;

// ------------header section styling end ----------

const MainSection = styled.section`
    padding: 40px 0;
`;
const HeroSection = styled.div`
    background: #f6f7fb;
    border-radius: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media all and (max-width: 768px) {
        background: unset;
        flex-wrap: wrap;
    }
`;
const HeroLeftDiv = styled.div`
    width: 30%;
    @media all and (max-width: 1050px) {
        width: 35%;
    }
    @media all and (max-width: 980px) {
        width: 40%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 40px;
    }
`;
const Heading = styled.h1`
    font-size: 38px;
    line-height: 3.3rem;
    width: 500px;
    @media all and (max-width: 1280px) {
        font-size: 31px;
        width: 400px;
    }
    @media all and (max-width: 1050px) {
        font-size: 30px;
    }
    @media all and (max-width: 980px) {
        font-size: 28px;
        line-height: 2.5rem;
    }
    @media all and (max-width: 480px) {
        font-size: 33px;
        width: 310px;
        line-height: 2.8rem;
    }
    @media all and (max-width: 360px) {
        font-size: 30px;
    }
`;
const ShopBtn = styled.button`
    border: 0;
    padding: 16px 40px;
    border-radius: 32px;
    font-size: 20px;
    background: #00cc96;
    color: #f7fafc;
    font-weight: 700;
    margin-top: 24px;
    @media all and (max-width: 1280px) {
        padding: 12px 30px;
        font-size: 18px;
    }
`;
const HeroRightDiv = styled.div`
    width: 55%;
    @media all and (max-width: 1050px) {
        width: 40%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
const HeroImgDiv = styled.div`
    @media all and (max-width: 1050px) {
        width: 434px;
    }
    @media all and (max-width: 980px) {
        width: 330px;
    }
    @media all and (max-width: 768px) {
        margin: 0 auto;
    }
    @media all and (max-width: 640px) {
        background: #f6f7fb;
        border-radius: 24px;
    }
    @media all and (max-width: 460px) {
        width: 300px;
        height: 300px;
        display: flex;
    }
    @media all and (max-width: 360px) {
        width: 280px;
        height: 280px;
    }
`;
const HeroImg = styled.img`
    width: 100%;
    display: block;
`;

// -------------MainSection styling end ------------

const CategorySection = styled.section`
    padding: 64px 0;
    @media all and (max-width: 1050px) {
        display: none;
    }
`;
const SubHeading = styled.h2``;
const CategoryList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
`;
const ListItem = styled.li`
    background: #f6f7fb;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 120px;
    height: 100px;
    border-radius: 24px;
    @media all and (max-width: 1280px) {
        width: 100px;
        height: 100px;
    }
`;
const ItemDiv = styled.div`
    width: 27px;
    margin-bottom: 12px;
`;
const ItemIcon = styled.img`
    display: block;
    width: 100%;
`;
const ItemName = styled.small`
    font-size: 16px;
    @media all and (max-width: 1280px) {
        font-size: 14px;
    }
`;
// ------------Category Section end -----------------

const ProductSection = styled.section`
    padding: 34px 0;
`;
const ProductList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px 0;
`;
const ProductItem = styled.li`
    width: 21%;
    margin-bottom: 48px;
    @media all and (max-width: 768px) {
        width: 42%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const Product = styled.div`
    background: #f6f7fb;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 276px;
    width: 276px;
    margin-bottom: 24px;
    @media all and (max-width: 1440px) {
        height: 250px;
        width: 250px;
    }
    @media all and (max-width: 1280px) {
        height: 200px;
        width: 200px;
    }
    @media all and (max-width: 980px) {
        height: 160px;
        width: 155px;
    }
    @media all and (max-width: 768px) {
        height: 230px;
        width: 230px;
    }
    @media all and (max-width: 640px) {
        height: 180px;
        width: 180px;
    }
    @media all and (max-width: 480px) {
        height: 280px;
        width: 280px;
        margin: 0 auto;
        margin-bottom: 24px;
    }
`;
const ProductDiv = styled.div`
    width: 150px;
    position: relative;
    left: 24px;
    @media all and (max-width: 1440px) {
        width: 125px;
    }
    @media all and (max-width: 1050px) {
        width: 100px;
    }
    @media all and (max-width: 640px) {
        width: 90px;
    }
    @media all and (max-width: 480px) {
        width: 110px;
    }
`;
const ProductImg = styled.img`
    display: block;
    width: 100%;
`;
const ProductDetails = styled.div`
    display: flex;
    align-items: center;
`;
const ProductName = styled.h3`
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 20px;
    @media all and (max-width: 1440px) {
        font-size: 18px;
    }
    @media all and (max-width: 1050px) {
        font-size: 14px;
    }
    @media all and (max-width: 768px) {
        font-size: 18px;
    }
`;
const OgPrice = styled.span`
    font-size: 16px;
    text-decoration: line-through;
    color: rgba(26, 32, 44, 0.24);
    margin-right: 12px;
`;
const ProductType = styled.h4`
    color: #ffc123;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(255, 193, 35, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
    @media all and (max-width: 1050px) {
        padding: 8px 10px;
    }
`;
const Price = styled.small`
    font-size: 18px;
    font-weight: 600;
`;
const ProductType2 = styled.h4`
    color: #2975ff;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(41, 117, 255, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
        padding: 8px 14px;
    }
    @media all and (max-width: 1050px) {
        margin-right: 10px;
    }
`;
const ProductType3 = styled.h4`
    color: #ff66a0;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(255, 102, 160, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
`;
const ProductType4 = styled.h4`
    color: #00cc96;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(0, 204, 150, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
`;
const ProductType5 = styled.h4`
    color: #ffc123;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(255, 193, 35, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
`;
const ProductType6 = styled.h4`
    color: #2975ff;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(41, 117, 255, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
`;
const ProductType7 = styled.h4`
    color: #ff66a0;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(255, 102, 160, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
`;
const ProductType8 = styled.h4`
    color: #00cc96;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 24px;
    margin-right: 24px;
    background: rgba(0, 204, 150, 0.1);
    @media all and (max-width: 1440px) {
        font-size: 10px;
    }
`;
const ViewBtn = styled.button`
    border: 0;
    padding: 16px 40px;
    border-radius: 32px;
    font-size: 20px;
    background: #00cc96;
    color: #f7fafc;
    font-weight: 700;
    display: block;
    margin: 0 auto;

    padding: 14px 34px;
    border-radius: 32px;
    font-size: 18px;

    @media all and (max-width: 768px) {
        padding: 14px 34px;
        font-size: 18px;
    }
`;
const ContactSection = styled.section`
    padding: 40px 0;
`;
const ContactHeading = styled.h2`
    text-align: center;
`;
const ContactList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    text-align: center;
    padding: 46px 0px;
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;
const ContactItem = styled.li``;
const IconBg = styled.div`
    width: 50px;
    height: 50px;
    background: #f6f7fb;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 24px;
`;
const Icon = styled.img`
    width: 24px;
`;
const ContactName = styled.h4`
    margin-bottom: 24px;
`;
const ContactDisc = styled.p`
    width: 60%;
    margin: 0 auto;
    line-height: 1.5em;
    @media all and (max-width: 1051px) {
        width: 80%;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 24px;
    }
`;
// -----------Contact Section End -----------

const FooterSection = styled.footer`
    padding: 80px 0px 30px 0px;
    @media all and (max-width: 480px) {
        padding: 0px 0px 30px 0px;
    }
`;
const FooterDetails = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 480px) {
        flex-wrap: wrap;
    }
`;
const LeftSection = styled.div`
    width: 70%;
`;
const FooterLogo = styled.div``;
const FLogoDiv = styled.div`
    width: 100px;
`;
const FLogo = styled.img`
    width: 100%;
    display: block;
`;
const Copyright = styled.h5`
    margin: 24px 0;
    font-weight: 500;
`;
const MediaList = styled.ul`
    display: flex;
`;
const MediaItems = styled.li`
    width: 50px;
    height: 50px;
    background: #f6f7fb;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
`;
const MediaIcon = styled.img``;
const RightSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    @media all and (max-width: 980px) {
        width: 55%;
    }
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const LegalList = styled.ul``;
const LegalHeading = styled.h3`
    margin-bottom: 24px;
`;
const LegalItems = styled.h4`
    margin-bottom: 14px;
    font-weight: 500;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;
const CompanyList = styled.ul``;
const CompanHeading = styled.h3`
    margin-bottom: 24px;
`;
const CompanItems = styled.h4`
    margin-bottom: 14px;
    font-weight: 500;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`;

// ------------Footer Section End -------------------
