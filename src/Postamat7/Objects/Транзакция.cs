﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postamat7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Транзакция.
    /// </summary>
    // *** Start programmer edit section *** (Транзакция CustomAttributes)

    // *** End programmer edit section *** (Транзакция CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТранзакцияE", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "Оплата as \'Оплата\'",
            "Сумма as \'Сумма\'",
            "Пользователь as \'Пользователь\'",
            "Пользователь.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "Пользователь.ФИО"})]
    [MasterViewDefineAttribute("ТранзакцияE", "Пользователь", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ТранзакцияL", new string[] {
            "Номер as \'Номер\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "Оплата as \'Оплата\'",
            "Сумма as \'Сумма\'",
            "Пользователь.ФИО as \'ФИО\'"})]
    public class Транзакция : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private System.DateTime fДата;
        
        private string fВремя;
        
        private IIS.Postamat7.Оплата fОплата;
        
        private double fСумма;
        
        private IIS.Postamat7.Пользователь fПользователь;
        
        // *** Start programmer edit section *** (Транзакция CustomMembers)

        // *** End programmer edit section *** (Транзакция CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (Транзакция.Время CustomAttributes)

        // *** End programmer edit section *** (Транзакция.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (Транзакция.Время Get start)

                // *** End programmer edit section *** (Транзакция.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (Транзакция.Время Get end)

                // *** End programmer edit section *** (Транзакция.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Транзакция.Время Set start)

                // *** End programmer edit section *** (Транзакция.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (Транзакция.Время Set end)

                // *** End programmer edit section *** (Транзакция.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (Транзакция.Дата CustomAttributes)

        // *** End programmer edit section *** (Транзакция.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (Транзакция.Дата Get start)

                // *** End programmer edit section *** (Транзакция.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (Транзакция.Дата Get end)

                // *** End programmer edit section *** (Транзакция.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Транзакция.Дата Set start)

                // *** End programmer edit section *** (Транзакция.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (Транзакция.Дата Set end)

                // *** End programmer edit section *** (Транзакция.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Транзакция.Номер CustomAttributes)

        // *** End programmer edit section *** (Транзакция.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Транзакция.Номер Get start)

                // *** End programmer edit section *** (Транзакция.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Транзакция.Номер Get end)

                // *** End programmer edit section *** (Транзакция.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Транзакция.Номер Set start)

                // *** End programmer edit section *** (Транзакция.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Транзакция.Номер Set end)

                // *** End programmer edit section *** (Транзакция.Номер Set end)
            }
        }
        
        /// <summary>
        /// Оплата.
        /// </summary>
        // *** Start programmer edit section *** (Транзакция.Оплата CustomAttributes)

        // *** End programmer edit section *** (Транзакция.Оплата CustomAttributes)
        public virtual IIS.Postamat7.Оплата Оплата
        {
            get
            {
                // *** Start programmer edit section *** (Транзакция.Оплата Get start)

                // *** End programmer edit section *** (Транзакция.Оплата Get start)
                IIS.Postamat7.Оплата result = this.fОплата;
                // *** Start programmer edit section *** (Транзакция.Оплата Get end)

                // *** End programmer edit section *** (Транзакция.Оплата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Транзакция.Оплата Set start)

                // *** End programmer edit section *** (Транзакция.Оплата Set start)
                this.fОплата = value;
                // *** Start programmer edit section *** (Транзакция.Оплата Set end)

                // *** End programmer edit section *** (Транзакция.Оплата Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (Транзакция.Сумма CustomAttributes)

        // *** End programmer edit section *** (Транзакция.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (Транзакция.Сумма Get start)

                // *** End programmer edit section *** (Транзакция.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (Транзакция.Сумма Get end)

                // *** End programmer edit section *** (Транзакция.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Транзакция.Сумма Set start)

                // *** End programmer edit section *** (Транзакция.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (Транзакция.Сумма Set end)

                // *** End programmer edit section *** (Транзакция.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Транзакция.
        /// </summary>
        // *** Start programmer edit section *** (Транзакция.Пользователь CustomAttributes)

        // *** End programmer edit section *** (Транзакция.Пользователь CustomAttributes)
        [PropertyStorage(new string[] {
                "Пользователь"})]
        [NotNull()]
        public virtual IIS.Postamat7.Пользователь Пользователь
        {
            get
            {
                // *** Start programmer edit section *** (Транзакция.Пользователь Get start)

                // *** End programmer edit section *** (Транзакция.Пользователь Get start)
                IIS.Postamat7.Пользователь result = this.fПользователь;
                // *** Start programmer edit section *** (Транзакция.Пользователь Get end)

                // *** End programmer edit section *** (Транзакция.Пользователь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Транзакция.Пользователь Set start)

                // *** End programmer edit section *** (Транзакция.Пользователь Set start)
                this.fПользователь = value;
                // *** Start programmer edit section *** (Транзакция.Пользователь Set end)

                // *** End programmer edit section *** (Транзакция.Пользователь Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТранзакцияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТранзакцияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТранзакцияE", typeof(IIS.Postamat7.Транзакция));
                }
            }
            
            /// <summary>
            /// "ТранзакцияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТранзакцияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТранзакцияL", typeof(IIS.Postamat7.Транзакция));
                }
            }
        }
    }
}
