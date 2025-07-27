import Layout from "../../Layout/Layout";


const UpgradeNow = ({isPremium}) => {
    return (
       
        //    <iframe src='https://checkout.freemius.com/plugin/17727/plan/29468/' frameBorder='0' width='100%' height="700px" style={{width:"calc(100% - 20px)",height:"calc(100vh - 60px)", marginTop:"15px"}}  ></iframe>
          
            <Layout isPremium={isPremium}>
               
                <div className="feature-section" >
                     <iframe src='https://checkout.freemius.com/plugin/17727/plan/29468/' loading="eager" width='100%'  style={ {height:"calc(100vh - 200px)", }}  ></iframe>

                </div>

            </Layout>
       
    );
};

export default UpgradeNow;