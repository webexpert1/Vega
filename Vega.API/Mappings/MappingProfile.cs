using AutoMapper;
using Vega.API.Controllers.Resources;
using Vega.API.Models;

namespace Vega.API.Mappings
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
            CreateMap<Feature, KeyValuePairResource>();
        }
    }
}